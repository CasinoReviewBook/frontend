'use client';

import { useState, useEffect } from 'react';

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface CasinoFilterProps {
  onFilterChange: (selectedTags: string[]) => void;
}

export default function CasinoFilter({
  onFilterChange,
}: CasinoFilterProps) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/tags`
        );

        if (response.ok) {
          const data = await response.json();
          setTags(data);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  const toggleTag = (tagId: string) => {
    if (tagId === 'all') {
      // If clicking "All", clear all selections
      setSelectedTags([]);
      onFilterChange([]);
    } else {
      // If clicking a specific tag, toggle it
      const newSelectedTags = selectedTags.includes(tagId)
        ? selectedTags.filter((id) => id !== tagId)
        : [...selectedTags, tagId];

      setSelectedTags(newSelectedTags);
      onFilterChange(newSelectedTags);
    }
  };

  if (loading) {
    return (
      <div className="w-full py-6 flex justify-center">
        <p className="text-[#6F758F]">Loading filters...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 mt-6">
        {/* All button */}
        <button
          key="all"
          type="button"
          onClick={() => toggleTag('all')}
          className={`rounded-full px-5 py-2 transition-all duration-200
font-poppins font-semibold text-[14px] leading-[100%] tracking-[0.02em] uppercase
border-2
${
  selectedTags.length === 0
    ? "bg-gradient-to-b from-[#F4F8FF] to-[#E8F0FF] border-[#BFD4FF] text-[#2E68FB] shadow-[0px_4px_10px_rgba(46,104,251,0.12)]"
    : "bg-[#FFFFFF6C] border-[#FFFFFF80] text-[#6F758F] shadow-[0px_3px_6px_rgba(255,255,255,0.5)] hover:bg-[#FFFFFF80]"
}`}
        >
          All
        </button>
        
        {tags.map((tag) => {
          const selected = selectedTags.includes(tag.id);

          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => toggleTag(tag.id)}
              className={`rounded-full px-5 py-2 transition-all duration-200
font-poppins font-semibold text-[14px] leading-[100%] tracking-[0.02em] uppercase
border-2
${
  selected
    ? "bg-gradient-to-b from-[#F4F8FF] to-[#E8F0FF] border-[#BFD4FF] text-[#2E68FB] shadow-[0px_4px_10px_rgba(46,104,251,0.12)]"
    : "bg-[#FFFFFF6C] border-[#FFFFFF80] text-[#6F758F] shadow-[0px_3px_6px_rgba(255,255,255,0.5)] hover:bg-[#FFFFFF80]"
}`}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}