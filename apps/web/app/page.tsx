import { prismaClient } from "db/client";
export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      {JSON.stringify(users)}
    </div>
  );
}
