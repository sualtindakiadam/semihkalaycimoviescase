1 - npm paketlerini yüklemelisiniz  

proje dosyasını açtıktan sonra terminale girerek 
- "pnpm install" komutunu çalıştırıyoruz. (npm install da kullanılabilir)
    NPM: Her proje bağımsız olarak tüm bağımlılıkları indirir ve projenin node_modules klasörüne yerleştirir. Bu, disk alanının fazla kullanılmasına neden olabilir ve bazı durumlarda gereksiz tekrarlar oluşturur.
    PNPM: node_modules klasöründe sembolik bağlantılar kullanarak bağımlılıkları merkezi bir alanda saklar. Bu, disk alanını daha verimli kullanmak anlamına gelir ve projeler arasında paylaşılan bağımlılıkları aynı yerden alır.
- gerekli indirmeler yapıldıktan sonra "pnpm dev" komutu ile pojeyi başlatabilirsiniz
- proje başlatıldıktan sonra tarayıcınız üzerinden, arama çubuğuna "http://localhost:3000" yazarak projenin çalıştığı local port a ulaşabilirsiniz 

Aşağıda da Projemizi ilk oluşturduğumuzda React tarafından oluşan kendi README bilgilendirmesini bulabilirsiniz.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
