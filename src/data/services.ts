import { Laptop, Monitor, Gamepad2, Cpu, Code, Shield, HardDrive, CircuitBoard, Tablet, Battery, Sparkles, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  category: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Laptop Repair",
    icon: Laptop,
    description: "Complete laptop repair for all brands including screen replacement, keyboard repair, battery replacement, motherboard repair, hinge repair, and charging port fix.",
    features: ["All Brands", "Same Day", "Warranty"],
    category: "laptop",
  },
  {
    id: 2,
    title: "Desktop Repair",
    icon: Monitor,
    description: "Expert desktop repair services including power supply replacement, motherboard repair, CPU troubleshooting, graphics card repair, and system optimization.",
    features: ["All Brands", "On-site Available", "Warranty"],
    category: "desktop",
  },
  {
    id: 3,
    title: "Gaming PC Assembly",
    icon: Gamepad2,
    description: "Custom gaming PC builds with latest NVIDIA/AMD GPUs, RGB lighting, liquid cooling, high-speed RAM, and SSD storage. Performance testing included.",
    features: ["Custom Build", "RGB Setup", "Performance Test"],
    category: "gaming",
  },
  {
    id: 4,
    title: "Hardware Upgrades",
    icon: Cpu,
    description: "RAM upgrade, SSD installation and cloning, graphics card upgrade, processor replacement, power supply upgrade for better performance.",
    features: ["Genuine Parts", "Performance Boost", "Warranty"],
    category: "upgrade",
  },
  {
    id: 5,
    title: "Software Installation",
    icon: Code,
    description: "Windows 10/11 installation, driver installation, MS Office setup, antivirus installation, and all essential software configuration.",
    features: ["Licensed Software", "Quick", "Support"],
    category: "software",
  },
  {
    id: 6,
    title: "Virus Removal",
    icon: Shield,
    description: "Complete virus, malware, and spyware removal. System cleanup, security hardening, and antivirus installation to prevent future infections.",
    features: ["Complete Clean", "Security", "Protection"],
    category: "software",
  },
  {
    id: 7,
    title: "Data Recovery",
    icon: HardDrive,
    description: "Professional data recovery from failed hard drives, corrupted partitions, formatted drives, and physically damaged storage devices.",
    features: ["High Success", "Secure", "Confidential"],
    category: "recovery",
  },
  {
    id: 8,
    title: "Motherboard Repair",
    icon: CircuitBoard,
    description: "Chip-level motherboard repair for laptops and desktops. Power IC replacement, BIOS repair, and component-level troubleshooting.",
    features: ["Expert Level", "Advanced", "Warranty"],
    category: "laptop",
  },
  {
    id: 9,
    title: "Screen Replacement",
    icon: Tablet,
    description: "Laptop screen replacement for all brands and sizes. We stock screens for Dell, HP, Lenovo, Acer, Asus, MacBook, and more.",
    features: ["All Sizes", "Same Day", "Warranty"],
    category: "laptop",
  },
  {
    id: 10,
    title: "Battery Replacement",
    icon: Battery,
    description: "Original laptop battery replacement for all major brands. High-quality compatible batteries with warranty.",
    features: ["Original", "Long Life", "Warranty"],
    category: "laptop",
  },
  {
    id: 11,
    title: "Cleaning Service",
    icon: Sparkles,
    description: "Deep cleaning of laptops and desktops including fan cleaning, thermal paste replacement, dust removal, and heat sink cleaning.",
    features: ["Deep Clean", "Cooling", "Performance"],
    category: "maintenance",
  },
  {
    id: 12,
    title: "Annual Maintenance",
    icon: Calendar,
    description: "Comprehensive AMC packages for homes and offices. Regular servicing, priority support, and preventive maintenance.",
    features: ["Preventive", "Priority", "Savings"],
    category: "maintenance",
  },
];

export interface PricingItem {
  service: string;
  description: string;
  price: string;
}

export const pricingData: PricingItem[] = [
  { service: "Laptop System Formatting", description: "Complete formatting with data backup", price: "Rs. 499" },
  { service: "Windows Installation", description: "Windows 10/11 with drivers", price: "Rs. 799" },
  { service: "SSD Upgrade", description: "256GB/512GB/1TB SSD installation", price: "Rs. 1,499" },
  { service: "RAM Upgrade", description: "4GB/8GB/16GB RAM installation", price: "Rs. 999" },
  { service: "Laptop Cleaning", description: "Deep cleaning + thermal paste", price: "Rs. 699" },
  { service: "Keyboard Replacement", description: "All laptop brands", price: "Rs. 1,499" },
  { service: "Screen Replacement", description: "All sizes and brands", price: "Rs. 2,499" },
  { service: "Battery Replacement", description: "Original/OEM batteries", price: "Rs. 1,999" },
  { service: "Motherboard Repair", description: "Chip-level repair", price: "Rs. 1,499" },
  { service: "Virus Removal", description: "Complete system cleanup", price: "Rs. 599" },
  { service: "Data Recovery", description: "From failed drives", price: "Rs. 1,999" },
  { service: "Hinge Repair", description: "Laptop hinge replacement", price: "Rs. 999" },
  { service: "Charging Port Fix", description: "DC jack replacement", price: "Rs. 899" },
  { service: "WiFi Repair", description: "Network card replacement", price: "Rs. 799" },
  { service: "Speaker Repair", description: "Internal speaker replacement", price: "Rs. 699" },
];
