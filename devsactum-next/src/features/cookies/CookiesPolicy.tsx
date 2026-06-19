"use client"

import React from "react"
import { Shield, Database, Key, Palette, Lock, Bell, Globe, Trash2 } from "lucide-react"

const SECTIONS = [
  {
    id: "privacidad-diseno",
    title: "Privacidad por Diseño",
    icon: Shield,
    text:
      "En Devsanctum, hemos erradicado el uso de cookies de rastreo publicitario y de terceros. Nuestro enfoque se centra exclusivamente en el almacenamiento técnico necesario para la operatividad, seguridad y personalización de su entorno digital.",
  },
  {
    id: "persistencia",
    title: "Tecnologías de Persistencia",
    icon: Database,
    text:
      "Para garantizar un rendimiento óptimo y una arquitectura de baja latencia, utilizamos mecanismos de almacenamiento moderno integrados en su navegador (HTML5 Web Storage). A diferencia de las cookies tradicionales, estos métodos ofrecen mayor seguridad y no se envían automáticamente con cada petición HTTP.",
  },
  {
    id: "sesion",
    title: "Sesión y Autenticación",
    icon: Key,
    text:
      "Utilizamos tokens de identidad cifrados a través de Firebase Auth (Google). Esto permite que Devsanctum valide su identidad de forma persistente, eliminando la necesidad de re-autenticarse en cada interacción y protegiendo su sesión contra secuestros de tráfico.",
  },
  {
    id: "preferencias",
    title: "Preferencias de Interfaz",
    icon: Palette,
    text:
      "Almacenamos localmente sus configuraciones de UI: desde el Modo AMOLED hasta la disposición de sus paneles y Sidebars. Esto reduce el parpadeo visual durante la carga y personaliza su flujo de trabajo de manera inmediata.",
  },
  {
    id: "mfa",
    title: "Validación Multi-factor",
    icon: Lock,
    text:
      "Guardamos temporalmente el estado de su verificación de identidad (MFA) durante la sesión activa. Esto garantiza que sus privilegios de seguridad se mantengan sin interrupciones molestas durante procesos críticos.",
  },
  {
    id: "notificaciones",
    title: "Gestión de Notificaciones",
    icon: Bell,
    text:
      "Si opta por recibir alertas, utilizamos Service Workers para gestionar el registro de suscripción PUSH, permitiendo que Devsanctum le mantenga informado incluso cuando la pestaña del navegador está cerrada.",
  },
  {
    id: "pwa",
    title: "Infraestructura PWA y Caché",
    icon: Globe,
    text:
      "Como Aplicación Progresiva (PWA), Devsanctum emplea Service Workers de última generación. Estos actúan como un proxy inteligente que cachea archivos estáticos, activos de diseño y scripts esenciales. Esto no solo acelera la carga hasta en un 80%, sino que garantiza la operatividad en condiciones de baja conectividad.",
  },
  {
    id: "gestion",
    title: "Gestión de sus Preferencias",
    icon: Trash2,
    text:
      "Usted puede eliminar todos los datos almacenados por Devsanctum en cualquier momento limpiando el \"Almacenamiento del sitio\" o las \"Cookies y otros datos de sitios\" en la configuración de su navegador. Tenga en cuenta que esto cerrará su sesión y restablecerá sus preferencias de diseño a los valores por defecto.",
  },
]

export default function CookiesPolicy() {
  return (
    <div className="px-6 py-6 max-w-[860px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[26px] font-black tracking-[-1px] text-[var(--text-h)] m-0">
          Política de Cookies
        </h1>
        <p className="text-[13px] text-[var(--text)] mt-2 m-0">
          Transparencia y Gestión de Almacenamiento &bull; 2026
        </p>
      </div>

      {/* Intro */}
      <p className="text-[13px] text-[var(--text-soft)] leading-[1.8] mb-8 p-4 bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-lg)]">
        En Devsanctum nos tomamos tu privacidad en serio. A continuación explicamos
        qué tecnologías de almacenamiento utilizamos, por qué son necesarias y cómo
        puedes gestionarlas.
      </p>

      {/* Sections */}
      <div className="flex flex-col gap-5">
        {SECTIONS.map(({ id, title, icon: Icon, text }) => (
          <div
            key={id}
            id={id}
            className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-5 hover:border-[var(--primary-border)] transition-colors duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-[var(--radius-lg)] bg-[var(--primary-soft)] border border-[var(--primary-border)] flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={18} className="text-[var(--primary)]" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h2 className="text-[15px] font-extrabold text-[var(--text-h)] m-0 mb-2">
                  {title}
                </h2>
                <p className="text-[13px] text-[var(--text-soft)] leading-[1.8] m-0">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-8 p-4 bg-[var(--primary-soft)] border border-[var(--primary-border)] rounded-[var(--radius-lg)]">
        <p className="text-[12px] text-[var(--primary)] font-semibold m-0 leading-[1.7]">
          <strong>Guía de configuración de navegadores:</strong> Puedes gestionar el almacenamiento
          desde la configuración de tu navegador en la sección de &quot;Privacidad y seguridad&quot;
          &rarr; &quot;Cookies y otros datos de sitios&quot; o &quot;Almacenamiento del sitio&quot;.
        </p>
      </div>
    </div>
  )
}
