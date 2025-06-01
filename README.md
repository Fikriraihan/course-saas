# 🚀 Converso – Real-time AI Teaching Platform

Converso is a modern SaaS platform for interactive, AI-powered learning. Users can explore, create, and interact with "companions" (AI tutors) across a variety of subjects, track their learning journey, and manage subscriptions—all with secure authentication powered by Clerk.

---

## ✨ Features

- **🤖 AI Companions:**  
  Browse, create, and interact with subject-specific AI tutors.
- **📈 Personalized Learning:**  
  Track your progress and revisit completed sessions in "My Journey."
- **💳 Subscription Management:**  
  Access premium features and manage your plan.
- **🔐 Authentication:**  
  Secure sign-in and sign-up flows using Clerk, with a custom-branded experience.
- **🎨 Modern UI:**  
  Built with Next.js App Router, Tailwind CSS, and Radix UI for a fast, accessible, and beautiful interface.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Auth:** Clerk
- **UI:** Tailwind CSS, Radix UI, custom components
- **Forms & Validation:** React Hook Form, Zod
- **Icons:** Lucide React

---

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/course-saas.git
cd course-saas
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Clerk

- Create a [Clerk](https://clerk.com/) account.
- Add your Clerk frontend and API keys to your environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

- (Optional) Configure Clerk appearance and settings in `app/layout.tsx`.

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🗂️ Project Structure

```text
app/
  layout.tsx         # App-wide layout, ClerkProvider, Navbar
  page.tsx           # Home page: popular companions, recent sessions
  sign-in/           # (If present) Custom sign-in page
  companions/        # AI companion features (list, create, view)
  my-journey/        # User learning history
  subscription/      # Subscription management
components/
  Navbar.tsx         # Top navigation bar with auth controls
  CompanionCard.tsx  # Display for individual AI companions
  CompanionList.tsx  # List of companions/sessions
  CTA.tsx            # Call-to-action component
  ui/                # Reusable UI primitives (Button, Input, etc.)
middleware.ts        # Clerk authentication middleware
```

---

## 🔐 Authentication

- Clerk is integrated using the latest App Router approach.
- The `ClerkProvider` wraps your app in `app/layout.tsx`.
- Middleware in `middleware.ts` protects routes and APIs.
- Auth buttons and user controls are in the `Navbar` for a seamless experience.

---

## 🎨 Customization

- **Branding:**  
  Clerk's appearance is customized via the `appearance` prop in `ClerkProvider`.
- **UI:**  
  Easily extend or modify UI components in the `components/` and `components/ui/` folders.

---

## 📜 Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase

---

## 📄 License

[MIT](LICENSE) (or your preferred license)

---

## 🙏 Acknowledgements

- [Clerk](https://clerk.com/) for authentication
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

> _Feel free to further personalize this README with your own branding, screenshots, or deployment instructions!_
