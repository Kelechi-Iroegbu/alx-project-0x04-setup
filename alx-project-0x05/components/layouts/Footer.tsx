import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-bold mb-4">Splash App</h3>
          <p className="text-gray-400 mb-4">
            Your one-stop platform for all your needs. Connecting people, creating opportunities.
          </p>
          <p className="text-gray-400">© 2024 Splash App. All rights reserved.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <a href="/about">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/services">Services</a>
            </li>
            <li className="mb-2">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <FaFacebook size={24} />
            <FaTwitter size={24} />
            <FaInstagram size={24} />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
