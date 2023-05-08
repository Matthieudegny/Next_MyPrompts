"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface ProviderProps {
  session?: Session;
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
