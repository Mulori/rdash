import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ButtonLogout from "../components/ButtonLogout";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Meu Perfil
          </a>
        </li>
        <li className="nav-item">
          <ButtonLogout />
        </li>
      </ul>
      {children}
    </div>
  );
}
