"use client";

import { resources, transformWorkshopsToResources } from "@/data/resources";
import { workshops } from "@/data/workshops";
import { useState } from "react";
import Link from "next/link";

export default function ResourceLibrary() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const resourceTypes = [
    { id: "all", label: "All", emoji: "✨" },
    { id: "workshop", label: "Workshops", emoji: "🎓" },
    { id: "event", label: "Events", emoji: "🎉" },
    { id: "tool", label: "Tools", emoji: "🛠️" },
    { id: "program", label: "Programs", emoji: "🌟" },
  ];

  // Transform workshops to resources and combine with existing resources
  const allResources = [
    ...resources,
    ...transformWorkshopsToResources(workshops),
  ];

  const filteredResources =
    selectedFilter === "all"
      ? allResources
      : allResources.filter((resource) => resource.type === selectedFilter);

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="w-full">
        <div className="flex flex-wrap justify-start gap-2 mb-6">
          {resourceTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedFilter(type.id)}
              className={`filter-button ${
                selectedFilter === type.id
                  ? "filter-button-active"
                  : "filter-button-inactive"
              }`}
            >
              <span className="mr-1">{type.emoji}</span>
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
        {filteredResources.map((resource) => (
          <div key={resource.name} className="example-card">
            <h3>{resource.name}</h3>
            <p>{resource.description}</p>
            {resource.link ? (
              <Link
                href={resource.link}
                target="_blank"
                className="example-link"
              >
                View{" "}
                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}{" "}
                →
              </Link>
            ) : (
              <span className="example-link opacity-50 cursor-not-allowed">
                No link available
              </span>
            )}
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No resources found.</p>
        </div>
      )}
    </div>
  );
}
