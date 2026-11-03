'use client'

import { useEffect, useState } from 'react'
import { getLeader, type Leader } from '../../data/leaders'

function InfoField({ label, value }: { label: string; value: string }) {
  return <div className="info-field"><span className="field-label">{label}</span><strong>{value}</strong></div>
}

function BadgeFront({ leader }: { leader: Leader }) {
  return <section className="badge-face badge-front" aria-label="Frente do crachá">
    <p className="badge-title">{leader.title}</p>
    <div className="portrait" aria-label={`Fotografia de ${leader.name}`}>
        {leader.photo ? (
          <img
            src={`/cardgl${leader.photo}`}
            alt={`Foto de ${leader.name}`}
          />
        ) : (
          <span>{leader.initials}</span>
        )}
    </div>
    <div className="front-details"><InfoField label="Nome" value={leader.name} /><InfoField label="Função" value={leader.role} /></div>
    <span className="lovina-mark">Grupo Lovina</span>
  </section>
}

function BadgeBack({ leader }: { leader: Leader }) {
  return <section className="badge-face badge-back" aria-label="Verso do crachá">
    <div className="back-details"><InfoField label="Admissão" value={leader.admission} /><InfoField label="Tipo sanguíneo" value={leader.bloodType} /><InfoField label="Alergia" value={leader.allergy} /></div>
    <div className="back-brand">GRUPO LOVINA</div>
  </section>
}

function VerificationScreen() {
  return <main className="verification" aria-live="polite"><div className="verification-card"><div className="verification-icon" aria-hidden="true">✓</div><p className="verification-kicker">GRUPO LOVINA</p><h1>Funcionário(a) verificado(a) com sucesso!</h1><div className="progress-track"><span /></div><p className="loading-copy">Preparando seu crachá digital...</p></div></main>
}

export default function LeaderPageClient({ slug }: { slug: string }) {
  const [verified, setVerified] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const leader = getLeader(slug)

  useEffect(() => {
    if (!leader) return
    try {
      if (window.localStorage.getItem(`lovina-verification-${leader.slug}`) === 'true') setVerified(true)
    } catch {
      // O crachá continua funcionando mesmo quando o navegador bloqueia storage.
    }
  }, [leader])

  useEffect(() => {
    if (!leader || verified) return
    const timer = window.setTimeout(() => {
      setVerified(true)
      try { window.localStorage.setItem(`lovina-verification-${leader.slug}`, 'true') } catch {}
    }, 2600)
    return () => window.clearTimeout(timer)
  }, [leader, verified])
  useEffect(() => { if (!verified) return; const interval = window.setInterval(() => setFlipped((current) => !current), 5000); return () => window.clearInterval(interval) }, [verified])

  if (!leader) return <div className="app-shell" />
  if (!verified) return <VerificationScreen />

  return <main className="app-shell"><div className="ambient-glow" aria-hidden="true" /><div className="content-wrap"><header className="page-header"><span className="eyebrow">IDENTIFICAÇÃO DIGITAL</span><span className="header-line" /></header><div className="badge-stage"><div className={`badge ${flipped ? 'is-flipped' : ''}`}><div className="badge-inner"><BadgeFront leader={leader} /><BadgeBack leader={leader} /></div></div></div><section className="quick-info" aria-label="Informações do verso"><div className="quick-heading"><span className="quick-dot" /><p>Informações do colaborador</p></div><div className="quick-grid"><InfoField label="Admissão" value={leader.admission} /><InfoField label="Tipo sanguíneo" value={leader.bloodType} /><InfoField label="Alergia" value={leader.allergy} /></div></section><a className="group-link" href="https://grupolovina.com.br/centraldelinks" target="_blank" rel="noreferrer">Conheça o Grupo Lovina <span aria-hidden="true">↗</span></a><footer className="page-footer"><span>© 2026 GRUPO LOVINA · TODOS OS DIREITOS RESERVADOS</span></footer></div></main>
}
