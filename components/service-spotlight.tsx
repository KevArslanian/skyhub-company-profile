"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/company-profile";

type ServiceSpotlightProps = {
  services: ServiceItem[];
};

export function ServiceSpotlight({ services }: ServiceSpotlightProps) {
  const [activeId, setActiveId] = useState(services[0]?.id ?? "");

  const activeService = useMemo(
    () => services.find((service) => service.id === activeId) ?? services[0],
    [activeId, services],
  );

  if (!activeService) {
    return null;
  }

  return (
    <div className="service-spotlight">
      <div className="service-tabs" role="tablist" aria-label="SkyHub services">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            role="tab"
            aria-selected={service.id === activeService.id}
            className={service.id === activeService.id ? "service-tab service-tab-active" : "service-tab"}
            onClick={() => setActiveId(service.id)}
          >
            <span>{service.label}</span>
            <strong>{service.title}</strong>
          </button>
        ))}
      </div>

      <article className="service-detail" role="tabpanel" aria-label={activeService.title}>
        <p className="card-label">Service Focus</p>
        <h3>{activeService.title}</h3>
        <p className="service-summary">{activeService.summary}</p>
        <p className="service-detail-copy">{activeService.detail}</p>
        <div className="service-detail-footer">
          <span>Built for cargo control rooms</span>
          <ArrowRight size={18} />
        </div>
      </article>
    </div>
  );
}
