Remote Hosting: [https://6a0c1c08b104696564f7a8c2--chimerical-florentine-b75f84.netlify.app/](https://6a0c1c08b104696564f7a8c2--chimerical-florentine-b75f84.netlify.app/)


#  LocalHostSips - Café Management Portal

A modern, highly responsive client-side routed React web application designed for a coffee shop ecosystem. The portal features a dark espresso and amber theme, allowing customers to explore location-specific menus dynamically, while managers can utilize an administration portal to add fresh coffees directly to a local server-backed JSON database.

---

##  Design & Aesthetic
The application features a bespoke **Dark Espresso & Amber** UI profile optimized for cozy, specialty-coffee branding:
- **Primary Background:** `#1e140f` (Rich Dark Roast Espresso)
- **Secondary Surfaces:** `#2a1d16` (Smooth Coffee crema/bean profiles)
- **Primary Accent:** `bg-amber-500` / `text-amber-500` (Warm Honey/Caramel Roast Amber)
- **Typography Base:** `#f7f4f0` (Warm Cream Milk) and `#d6d3d1` (Soft Muted Stone)

---

##  Features

- **Single-Page Application Client-Side Routing:** Powered by `react-router-dom` for fluid navigation (Home, Shop, Admin Portal) without full-page browser reloads.
- **Dynamic Location-Based Pricing System:** Calculates and adjusts menu prices on the fly based on the café branch selected via the Sidebar layout:
  - **City Center:** Base Price (As entered via Form)
  - **Garden City Mall:** Base Price + KES 50
  - **Galleria Mall:** Base Price + KES 100
  - **Two Rivers Mall:** Base Price + KES 150
- **Asynchronous Form Administration:** An event-driven dashboard equipped with state synchronization, safely POSTing real-time records to a database API endpoint before updating views without manual page refreshes.
- **Responsive Workspace Framing:** Built with fluid Tailwind layout primitives ensuring sidebars pin exactly to screen boundaries, while the main viewing frame gracefully adapts on different monitor form factors.

---

## Tech Stack

- **Frontend Framework:** React (Functional components, Hooks layout workflow)
- **Styling Engine:** Tailwind CSS
- **Routing Layer:** React Router v6 (`react-router-dom`)
- **Mock DB API Host:** JSON Server (`json-server`)

---

##  Project Directory Layout

```text
├── public/
├── src/
│   ├── assets/           # Local graphic assets and GIFs
│   ├── components/       # Core layout views
│   │   ├── Hero.jsx      # Visual presentation panel with programmatic routing
│   │   ├── CoffeeList.jsx# Dynamic branch grid mapped menu listings
│   │   └── CoffeeForm.jsx# Interactive admin validation submission gate
│   ├── layout/           # Global structural scaffolds
│   │   ├── NavBar.jsx    # Sticky navigation container utilizing Router Links
│   │   ├── SideBar.jsx   # State-lifting active branch selection drawer
│   │   └── Footer.jsx    # Auto-anchoring bottom index metadata block
│   ├── App.jsx           # Master entry point, routing tree, & state orchestration
│   └── main.jsx          # DOM rendering bridge
├── db.json               # Local structured API mock database schema
├── package.json          # Dependency manifest configuration
└── README.md             # Project documentation


