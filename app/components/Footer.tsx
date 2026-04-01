"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjA0Ij4KPHBhdGggZD0iTTIwIDIwaDIwdjIwSDB6TTAgMjBoMjB2MjBIMHoiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ravindu Nimesh
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              ERP Strategy & Digital Transformation Expert bridging the gap
              between business logic and enterprise technology.
            </p>
            <p className="text-gray-400 italic">
              "Transforming complex processes into scalable digital solutions"
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-blue-300">
              Ecosystem Expertise
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Microsoft Business Central
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                SAP S/4HANA
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Oracle Cloud ERP
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                IFS Cloud Solutions
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-green-300">
              Data & Insights
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Power BI Dashboards
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Power Apps Automation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                Azure Integration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Microsoft Fabric
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-orange-300">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  className="hover:text-white transition-colors"
                >
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-red-300">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Ravindu Nimesh@example.com</li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Calendly Booking
                </a>
              </li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">
              Certifications
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                Microsoft Certified BC
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Power BI Data Analyst
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Azure Fundamentals
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Ravindu Nimesh. Crafting digital transformation solutions
            with expertise and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
