# Modern E-commerce Platform

A full-featured e-commerce platform built with Next.js, PayloadCMS, and modern web technologies.

## 🚀 Features

- Modern, responsive UI built with Next.js and Tailwind CSS
- Headless CMS powered by PayloadCMS
- Type-safe development with TypeScript
- Beautiful UI components using Radix UI
- Form handling with React Hook Form and Zod validation
- Dark mode support with next-themes
- MongoDB database integration
- GraphQL API support

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **CMS:** PayloadCMS
- **Database:** MongoDB
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form + Zod
- **Type Safety:** TypeScript
- **Development:** Turbopack

## 📦 Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB
- Bun (for package management)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in the required environment variables in `.env`

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run generate` - Generate PayloadCMS types
- `bun run lint` - Run ESLint

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Add your environment variables here
# See .env.example for reference
```

## 📁 Project Structure

```
├── src/              # Source files
├── public/           # Static files
├── .next/           # Next.js build output
├── components.json  # Component configuration
├── next.config.ts   # Next.js configuration
├── package.json     # Project dependencies
└── tsconfig.json    # TypeScript configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [PayloadCMS](https://payloadcms.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
