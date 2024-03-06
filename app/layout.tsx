import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';

<div className={styles.shape} />;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
