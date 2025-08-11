
import "../styles/index.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata = {
  title: "Web Development & Marketing That Drives Growth | Code & Promote",
  description:
    "Top digital agency offering expert web development, mobile apps, and marketing to build your brand and grow online.",
   
  alternates: {
    canonical: 'https://codeandpromote.io',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y4T5WLGW9C"></script>
<script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y4T5WLGW9C');
  
  `}
 
</script>
      </head>
      <body>
        <head>
          <link  rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Unbounded:wght@200..900&display=swap" />
        </head>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
