import { useState } from "react";
import { Menu, X, Cross } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Home",
    "Our Story",
    "Gallery",
    "Invitation",
    "Venue",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-full border border-[#D4AF3730] bg-black/40 backdrop-blur-2xl px-8 py-4">

        {/* Left */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="h-11 w-11 rounded-full border border-[#D4AF37] flex items-center justify-center">
            <Cross className="text-[#D4AF37]" size={18}/>
          </div>

          {navItems.slice(0,3).map((item)=>(
            <a
              key={item}
              href="#"
              className="text-sm uppercase tracking-[3px] text-gray-300 hover:text-[#D4AF37] transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37] bg-[#0b1220] shadow-[0_0_40px_rgba(212,175,55,.15)]">

          <span className="text-4xl font-serif text-[#D4AF37]">
            S
          </span>

          <span className="mx-1 text-xl text-[#D4AF37]">
            ♡
          </span>

          <span className="text-4xl font-serif text-[#D4AF37]">
            A
          </span>

        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.slice(3).map((item)=>(
            <a
              key={item}
              href="#"
              className="text-sm uppercase tracking-[3px] text-gray-300 hover:text-[#D4AF37] transition"
            >
              {item}
            </a>
          ))}

          <button className="rounded-full border border-[#D4AF37] px-6 py-3 text-xs uppercase tracking-[3px] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition">
            Save Date
          </button>
        </div>

        {/* Mobile */}
        <button className="lg:hidden text-[#D4AF37]">
          <Menu size={30}/>
        </button>

      </nav>
    </header>
  );
};

export default Header;