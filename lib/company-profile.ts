import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  Building2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  PlaneTakeoff,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export type CompanyFact = {
  label: string;
  value: string;
};

export type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export type ServiceItem = {
  id: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
};

export const HERO_TITLE =
  "Sistem cargo udara yang formal, stabil, dan siap dipakai untuk ritme operasional bandara.";

export const HERO_COPY =
  "SkyHub membantu operator memantau AWB, flight board, manifest, dan audit log dalam satu sistem yang stabil, rapi, dan siap digunakan sepanjang shift operasional.";

export const ABOUT_COPY =
  "SkyHub menghadirkan sistem operasional cargo udara yang menyatukan monitoring shipment, manifest, flight board, dan audit log dalam antarmuka yang formal, stabil, dan mudah dibaca untuk kebutuhan harian control room.";

export const OPERATOR_NOTE =
  "Tampilan dibuat dengan fokus pada keterbacaan cepat, struktur yang stabil, dan navigasi yang mudah dipahami untuk kebutuhan operasional harian.";

export const SERVICES: ServiceItem[] = [
  {
    id: "awb",
    label: "01",
    title: "AWB Tracking",
    summary: "Pemantauan airway bill secara cepat dengan status bertimestamp dan jalur tindak lanjut yang jelas.",
    detail:
      "Modul ini difokuskan pada lookup yang cepat, pembacaan status yang manusiawi, dan jejak pembaruan yang tidak membingungkan operator saat shift sedang padat.",
  },
  {
    id: "flight",
    label: "02",
    title: "Flight Board",
    summary: "Pantauan cutoff, status keberangkatan, dan koordinasi manifest dalam satu operator board.",
    detail:
      "Flight board menyatukan cutoff, keterlambatan, dan shipment terkait agar tim operasional tidak perlu berpindah antar layar hanya untuk memutuskan langkah berikutnya.",
  },
  {
    id: "manifest",
    label: "03",
    title: "Manifest Monitoring",
    summary: "Kontrol shipment, readiness, dokumen, dan exception handling tanpa berpindah konteks terlalu jauh.",
    detail:
      "Struktur manifest disusun untuk menjaga fokus pada item prioritas, dokumen yang belum lengkap, dan shipment yang perlu tindakan supervisor.",
  },
  {
    id: "audit",
    label: "04",
    title: "Audit & Alerts",
    summary: "Jejak aktivitas human-readable untuk supervisi, handover, dan evaluasi operasional yang rapi.",
    detail:
      "Audit trail menekankan ringkasan yang mudah dibaca, bukan sekadar log teknis, sehingga cocok dipakai untuk handover dan review internal.",
  },
];

export const FACTS: CompanyFact[] = [
  {
    label: "Industry",
    value: "Air Cargo Operations and Digital Logistics",
  },
  {
    label: "Services",
    value: "AWB Tracking, Flight Board, Manifest Monitoring, Audit and Alerts",
  },
  {
    label: "Coverage",
    value: "Domestic and International Cargo Coordination",
  },
  {
    label: "Status",
    value: "Enterprise Cargo Operations Platform",
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: Building2,
    label: "Office",
    value: "SkyHub Operations Center",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Jl. Kargo Internasional No. 12, Area Logistik Bandara, Jakarta 15126, Indonesia",
  },
  {
    icon: Mail,
    label: "General Email",
    value: "info@skyhub.co",
    href: "mailto:info@skyhub.co",
  },
  {
    icon: Mail,
    label: "Operations Email",
    value: "ops@skyhub.co",
    href: "mailto:ops@skyhub.co",
  },
  {
    icon: Mail,
    label: "Support Email",
    value: "support@skyhub.co",
    href: "mailto:support@skyhub.co",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 21 500 780",
    href: "tel:+6221500780",
  },
  {
    icon: Smartphone,
    label: "Mobile Ops",
    value: "+62 812 9000 1122",
    href: "tel:+6281290001122",
  },
  {
    icon: MessageCircleMore,
    label: "WhatsApp Business",
    value: "+62 812 9000 3344",
    href: "https://wa.me/6281290003344",
  },
  {
    icon: Globe2,
    label: "Website",
    value: "www.skyhub.co",
    href: "https://www.skyhub.co",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Senin sampai Jumat, 08.00 sampai 20.00 WIB",
  },
  {
    icon: ShieldCheck,
    label: "Emergency Ops Line",
    value: "24 jam monitoring support",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@skyhub.official",
    href: "https://instagram.com/skyhub.official",
  },
];

export const HIGHLIGHTS = [
  {
    title: "Integrated Ops Surface",
    copy: "Lookup AWB, flight board, manifest control, dan alert audit disusun dalam satu alur kerja yang tidak berisik.",
    icon: Workflow,
  },
  {
    title: "Readable Under Pressure",
    copy: "Antarmuka difokuskan pada keterbacaan, stabilitas, dan keputusan cepat selama shift operasional.",
    icon: ShieldCheck,
  },
  {
    title: "Shift-ready System",
    copy: "Disiapkan untuk control room yang memerlukan ritme kerja cepat, formal, dan tetap mudah dipindai.",
    icon: PlaneTakeoff,
  },
] as const;
