export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-base sm:text-lg text-accent mb-3 sm:mb-4">
                       Company 
            </h3>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed">
              Transforming spaces with precision and passion since 2010.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-xs sm:text-sm mb-3 sm:mb-4">Useful Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-xs sm:text-sm mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Office
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Retail
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-xs sm:text-sm mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4">
              {["f", "in", "ig", "tw"].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-primary-foreground/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-primary-foreground/70">
            © 2025 Abhishek Khanra — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
