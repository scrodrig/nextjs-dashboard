import '@/app/ui/global.css';

import styles from '@/app/ui/home.module.css';

<div className={styles.shape} />;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
