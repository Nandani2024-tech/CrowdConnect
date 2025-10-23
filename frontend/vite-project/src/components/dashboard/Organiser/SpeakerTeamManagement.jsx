// components/dashboard/Organiser/SpeakerTeamManagement.jsx
import React from 'react';
import { Users, UserPlus, Mail, Phone, Award } from 'lucide-react';

const SpeakerTeamManagement = ({ team }) => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-orange-400" />
          Speaker & Team Management
        </h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map(member => (
          <div
            key={member.id}
            className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all border border-slate-600/50 hover:border-orange-500/50"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold truncate">{member.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    member.role === 'Speaker' 
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {member.role}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <Award className="w-4 h-4" />
                  <span>{member.expertise}</span>
                </div>

                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-3 py-1.5 rounded text-sm flex items-center justify-center gap-1 transition-colors">
                    <Mail className="w-3 h-3" />
                    Email
                  </button>
                  <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-3 py-1.5 rounded text-sm flex items-center justify-center gap-1 transition-colors">
                    <Phone className="w-3 h-3" />
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3 text-sm">Pending Invitations</h3>
        <div className="space-y-2">
          {[
            { name: 'Dr. Amit Verma', role: 'Keynote Speaker', status: 'Awaiting Response' },
            { name: 'Neha Singh', role: 'Moderator', status: 'Invitation Sent' }
          ].map((invite, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <div>
                <span className="text-white font-medium">{invite.name}</span>
                <span className="text-slate-400 ml-2">• {invite.role}</span>
              </div>
              <span className="text-yellow-400 text-xs">{invite.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerTeamManagement;