import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { manualValidationSchema } from 'validationSchema/manuals';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.manual
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getManualById();
    case 'PUT':
      return updateManualById();
    case 'DELETE':
      return deleteManualById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getManualById() {
    const data = await prisma.manual.findFirst(convertQueryToPrismaUtil(req.query, 'manual'));
    return res.status(200).json(data);
  }

  async function updateManualById() {
    await manualValidationSchema.validate(req.body);
    const data = await prisma.manual.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteManualById() {
    const data = await prisma.manual.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
