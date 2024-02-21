'use server'

import { db } from "@/app/_lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";

const getAddress = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error('Usuário não encontrado')
  }
  
  const address = await db.address.findFirst({
    where: {
      userId: (session.user as any).id
    }
  });

  return address;
}
 
export default getAddress;