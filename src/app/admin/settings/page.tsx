import { Settings, Shield, Sliders, Bell, Save } from "lucide-react"

export const metadata = {
  title: "Settings — Admin | Career Cafe",
}

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl pb-12">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Admin Settings</h1>
        <p className="text-navy-500 mt-1">Configure global application settings, moderation rules, and security preferences.</p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-navy-100">
            <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-navy-900">General Information</h2>
              <p className="text-xs text-navy-500">Basic details about this Career Cafe instance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2">Platform Name</label>
              <input
                type="text"
                defaultValue="Career Cafe"
                className="w-full px-3.5 py-2 bg-navy-50 border border-navy-200 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2">Support Email</label>
              <input
                type="email"
                defaultValue="support@careercafe.com"
                className="w-full px-3.5 py-2 bg-navy-50 border border-navy-200 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2">Default Currency</label>
              <input
                type="text"
                defaultValue="INR (₹)"
                className="w-full px-3.5 py-2 bg-navy-50 border border-navy-200 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2">Environment</label>
              <input
                type="text"
                value="Production / Local"
                disabled
                className="w-full px-3.5 py-2 bg-navy-100 border border-navy-200 rounded-lg text-sm text-navy-500 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Security & Access */}
        <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-navy-100">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-navy-900">Security & Authentication</h2>
              <p className="text-xs text-navy-500">Manage user access policies and login security.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-navy-50/70 border border-navy-100">
              <div>
                <p className="text-sm font-medium text-navy-900">Allow Public User Signups</p>
                <p className="text-xs text-navy-500">Permit candidates and students to create accounts without an invitation.</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 text-brand-600 rounded border-navy-300 focus:ring-brand-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-navy-50/70 border border-navy-100">
              <div>
                <p className="text-sm font-medium text-navy-900">Require Email Verification</p>
                <p className="text-xs text-navy-500">Users must confirm their email before applying for jobs.</p>
              </div>
              <input
                type="checkbox"
                className="w-4 h-4 text-brand-600 rounded border-navy-300 focus:ring-brand-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-navy-50/70 border border-navy-100">
              <div>
                <p className="text-sm font-medium text-navy-900">Mandatory Employer Moderation</p>
                <p className="text-xs text-navy-500">Company listings must be approved by an admin before going live.</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 text-brand-600 rounded border-navy-300 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-navy-100 shadow-elevation-1 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-navy-100">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-navy-900">Notifications & Alerts</h2>
              <p className="text-xs text-navy-500">Configure administrative alert dispatching.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-navy-50/70 border border-navy-100">
              <div>
                <p className="text-sm font-medium text-navy-900">Admin Alert on New Moderation Flag</p>
                <p className="text-xs text-navy-500">Receive immediate notifications when items are flagged by users.</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 text-brand-600 rounded border-navy-300 focus:ring-brand-500"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-navy-50/70 border border-navy-100">
              <div>
                <p className="text-sm font-medium text-navy-900">Weekly Summary Reports</p>
                <p className="text-xs text-navy-500">Send aggregated platform analytics every Monday morning.</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 text-brand-600 rounded border-navy-300 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Save CTA */}
        <div className="flex justify-end pt-2">
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium text-sm transition-colors shadow-elevation-1"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
