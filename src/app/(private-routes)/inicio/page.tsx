import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Inicio() {
  const session = await getServerSession(nextAuthOptions);  

  return (
    <div>
      <h1>inicio</h1>
      <h2>Olá , {session?.user.nome_completo} sejá bem-vindo!</h2>
    </div>
  );
}
