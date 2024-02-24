import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "./_lib/utils";
import SelectedCategoryProvider from "./_providers/selected-category-provider";
import { CartProvider } from "./_providers/cart-provider";
import { Toaster } from "@/app/_components/ui/sonner";
import AuthProvider from "./_providers/auth-provider";
import { AddressProvider } from "./_providers/address-provider";

const poppins = Poppins({ weight: ['100', "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Menu-Online',
    default: 'Menu-Online',
  },
  description: "O melhor Restaurante da Região! MENU ON-LINE!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(poppins.className, 'min-h-screen h-screen bg-background font-sans antialiased')}>
        <AuthProvider>
          <SelectedCategoryProvider>
            <CartProvider>
              <AddressProvider>
                <main>
                  {children}
                  <Toaster position="top-right" richColors closeButton />
                </main>
              </AddressProvider>
            </CartProvider>
          </SelectedCategoryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
