import React, { useState } from 'react';
import { X, Save, Edit3, RotateCcw, Check, Sparkles } from 'lucide-react';
import { ProblemStatementData, ProjectMetadata, TeamMember } from '../types';

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  metadata: ProjectMetadata;
  setMetadata: React.Dispatch<React.SetStateAction<ProjectMetadata>>;
  problemData: ProblemStatementData;
  setProblemData: React.Dispatch<React.SetStateAction<ProblemStatementData>>;
  teamMembers: TeamMember[];
  setTeamMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>;
  onResetToDefaults: () => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  onClose,
  metadata,
  setMetadata,
  problemData,
  setProblemData,
  teamMembers,
  setTeamMembers,
  onResetToDefaults,
}) => {
  const [savedToast, setSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleMemberRoleChange = (id: string, newRole: string) => {
    setTeamMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, role: newRole } : m))
    );
  };

  const handleMemberEmailChange = (id: string, newEmail: string) => {
    setTeamMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, email: newEmail } : m))
    );
  };

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000080]/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#000080] p-6 sm:p-8 shadow-2xl shadow-[#000080]/30 max-h-[90vh] overflow-y-auto">
        {/* Top tricolor stripe */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] border-b border-[#000080]" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-[#000080]/15 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#FF9933]/20 border border-[#FF9933] text-[#000080]">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#000080] tracking-tight">
                Customize Hackathon Placeholders
              </h3>
              <p className="text-xs font-mono font-medium text-[#000080] opacity-80">
                Replace placeholders with your official SIH project details in real-time.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080] hover:bg-[#FF9933] text-[#000080] cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Sections */}
        <div className="space-y-6">
          {/* 1. Project Basic Meta */}
          <div className="p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080]/20 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF9933] font-extrabold">
              1. Project Identification
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  value={metadata.projectName}
                  onChange={(e) =>
                    setMetadata({ ...metadata, projectName: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-bold focus:outline-none focus:border-[#FF9933]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  value={metadata.teamName}
                  onChange={(e) =>
                    setMetadata({ ...metadata, teamName: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-bold focus:outline-none focus:border-[#FF9933]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                One-Line Tagline / Description
              </label>
              <input
                type="text"
                value={metadata.tagline}
                onChange={(e) =>
                  setMetadata({ ...metadata, tagline: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-medium focus:outline-none focus:border-[#FF9933]"
              />
            </div>
          </div>

          {/* 2. Official Problem Statement */}
          <div className="p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080]/20 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF9933] font-extrabold">
              2. Official SIH Problem Statement
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                  Problem Statement ID
                </label>
                <input
                  type="text"
                  value={problemData.id}
                  onChange={(e) =>
                    setProblemData({ ...problemData, id: e.target.value })
                  }
                  placeholder="e.g. SIH1604 / PS-102"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-bold focus:outline-none focus:border-[#FF9933]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                  Organization / Ministry
                </label>
                <input
                  type="text"
                  value={problemData.organization}
                  onChange={(e) =>
                    setProblemData({ ...problemData, organization: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-bold focus:outline-none focus:border-[#FF9933]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={problemData.category}
                  onChange={(e) =>
                    setProblemData({ ...problemData, category: e.target.value })
                  }
                  placeholder="Software / Hardware / Mixed"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-bold focus:outline-none focus:border-[#FF9933]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                  Theme
                </label>
                <input
                  type="text"
                  value={problemData.theme}
                  onChange={(e) =>
                    setProblemData({ ...problemData, theme: e.target.value })
                  }
                  placeholder="e.g. Smart Automation / HealthTech"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-bold focus:outline-none focus:border-[#FF9933]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                Problem Title
              </label>
              <input
                type="text"
                value={problemData.title}
                onChange={(e) =>
                  setProblemData({ ...problemData, title: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-bold focus:outline-none focus:border-[#FF9933]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#000080] font-bold mb-1">
                Complete Problem Description
              </label>
              <textarea
                rows={3}
                value={problemData.description}
                onChange={(e) =>
                  setProblemData({ ...problemData, description: e.target.value })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/30 text-[#000080] text-sm font-medium focus:outline-none focus:border-[#FF9933]"
              />
            </div>
          </div>

          {/* 3. Team Member Roles */}
          <div className="p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#000080]/20 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF9933] font-extrabold">
              3. Team Member Roles &amp; Emails
            </h4>
            <p className="text-xs font-medium text-[#000080] opacity-80">
              Update roles and emails for the 6 official team members without altering their credentials.
            </p>

            <div className="space-y-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="p-3 rounded-xl bg-[#FFFFFF] border-2 border-[#000080]/20 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                >
                  <div className="sm:col-span-4 font-extrabold text-sm text-[#000080]">
                    {member.name}
                  </div>
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => handleMemberRoleChange(member.id, e.target.value)}
                      placeholder="Role (e.g. Lead, ML Eng)"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#FFFFFF] border-2 border-[#000080]/30 text-xs text-[#000080] font-mono font-bold focus:outline-none focus:border-[#FF9933]"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      value={member.email}
                      onChange={(e) => handleMemberEmailChange(member.id, e.target.value)}
                      placeholder="Email address"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-[#FFFFFF] border-2 border-[#000080]/30 text-xs text-[#000080] font-mono font-medium focus:outline-none focus:border-[#FF9933]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t-2 border-[#000080]/15">
          <button
            onClick={onResetToDefaults}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#FF9933]/20 text-xs font-mono font-extrabold text-[#000080] border-2 border-[#000080] cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Placeholders</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#000080] hover:text-[#FF9933] cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF9933] hover:bg-[#FF9933]/90 text-[#000080] font-extrabold text-xs tracking-wide border-2 border-[#000080] shadow-sm cursor-pointer transition-colors"
            >
              {savedToast ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedToast ? 'Saved!' : 'Apply Changes'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
