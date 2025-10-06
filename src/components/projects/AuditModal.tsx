'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X, FileText, Shield, AlertTriangle } from 'lucide-react';
import { Audit } from '@/data/audit';

interface AuditModalProps {
  audit: Audit;
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ audit, isOpen, onClose }: AuditModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all border border-slate-700">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-white">
                    {audit.name}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors rounded-full p-1 hover:bg-slate-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Image */}
                  <div className="h-64 bg-gradient-to-br from-orange-900 to-red-900 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <Shield className="w-12 h-12 mx-auto mb-2" />
                      <p>Security Audit Report</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Audit Summary</h4>
                    <p className="text-gray-300">{audit.description}</p>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {audit.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`px-3 py-1 bg-gradient-to-r ${tag.color} text-white rounded-full text-sm border border-slate-600`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Security Insights */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                      Key Findings
                    </h4>
                    <p className="text-gray-300">
                      This audit identified critical vulnerabilities and provided recommendations for secure implementation.
                      The full report contains detailed analysis, code snippets, and remediation steps.
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={audit.source_code_link}
                      className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      View Full Report
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
