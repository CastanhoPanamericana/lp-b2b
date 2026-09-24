import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, Building, CheckCircle2, Copy } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedCourse = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    cursoInteresse: selectedCourse,
    mensagem: '',
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, cursoInteresse: selectedCourse }));
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('corporativo@panamericana.edu.br');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="contact-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="bg-[#111111] text-white p-6 flex justify-between items-center">
          <div>
            <span className="text-[0.7rem] font-black text-[#FFF100] tracking-widest uppercase block mb-1">
              Atendimento Corporativo B2B
            </span>
            <h3 className="text-xl font-black">Fale com um Consultor</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Solicitação Enviada com Sucesso!</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Nosso consultor executivo da ESPM | Panamericana entrará em contato em breve para apresentar a proposta sob medida.
              </p>
              <button
                onClick={resetForm}
                className="mt-4 bg-[#111111] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-black cursor-pointer"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Direct email info box */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-[#C8102E]" />
                  <span>corporativo@panamericana.edu.br</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-bold text-[#C8102E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Programa ou Módulo de Interesse
                </label>
                <input
                  type="text"
                  value={formData.cursoInteresse}
                  onChange={(e) => setFormData({ ...formData, cursoInteresse: e.target.value })}
                  placeholder="Ex: Pós-Graduação, Módulo Intensivo ou In-Company"
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:border-[#C8102E] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Nome completo"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:border-[#C8102E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Nome da sua empresa"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:border-[#C8102E] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.nome@empresa.com.br"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:border-[#C8102E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:border-[#C8102E] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Mensagem ou Necessidade Específica
                </label>
                <textarea
                  rows={3}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Conte-nos sobre o objetivo da capacitação para sua equipe..."
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:border-[#C8102E] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8102E] hover:bg-[#A00C23] text-white py-3 rounded-lg font-extrabold text-sm uppercase tracking-wide transition-colors cursor-pointer shadow-md"
              >
                Solicitar Proposta B2B
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
