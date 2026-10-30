'use client'

import { useEffect, useState } from 'react'

const employee = {
  title: 'LIDERANÇA',
  name: 'NENHUM',
  role: 'NENHUM',
  admission: 'NENHUM',
  bloodType: 'NENHUM',
  allergy: 'NENHUM',
  initials: 'GL',
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-field">
      <span className="field-label">{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function BadgeFront() {
  return (
    <section className="badge-face badge-front" aria-label="Frente do crachá">
      <p className="badge-title">{employee.title}</p>
      <div className="portrait" aria-label="Fotografia do funcionário">
        <span>{employee.initials}</span>
      </div>
      <div className="front-details">
        <InfoField label="Nome" value={employee.name} />
        <InfoField label="Função" value={employee.role} />
      </div>
      <span className="lovina-mark">Grupo Lovina</span>
    </section>
  )
}

function BadgeBack() {
  return (
    <section className="badge-face badge-back" aria-label="Verso do crachá">
      <div className="back-details">
        <InfoField label="Admissão" value={employee.admission} />
        <InfoField label="Tipo sanguíneo" value={employee.bloodType} />
        <InfoField label="Alergia" value={employee.allergy} />
      </div>
      <div className="back-brand">GRUPO LOVINA</div>
    </section>
  )
}

function VerificationScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, 2600)
    return () => window.clearTimeout(timer)
  }, [onFinish])

  return (
    <main className="verification" aria-live="polite">
      <div className="verification-card">
        <div className="verification-icon" aria-hidden="true">✓</div>
        <p className="verification-kicker">GRUPO LOVINA</p>
        <h1>Funcionário(a) verificado(a) com sucesso!</h1>
        <div className="progress-track"><span /></div>
        <p className="loading-copy">Preparando seu crachá digital...</p>
      </div>
    </main>
  )
}

export default function Page() {
  const [verified, setVerified] = useState<boolean | null>(null)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const alreadyVerified = window.localStorage.getItem('lovina-verification-seen') === 'true'
    setVerified(alreadyVerified)
  }, [])

  useEffect(() => {
    if (!verified) return
    const interval = window.setInterval(() => setFlipped((current) => !current), 5000)
    return () => window.clearInterval(interval)
  }, [verified])

  const finishVerification = () => {
    window.localStorage.setItem('lovina-verification-seen', 'true')
    setVerified(true)
  }

  if (verified === null) return <div className="app-shell" />
  if (!verified) return <VerificationScreen onFinish={finishVerification} />

  return (
    <main className="app-shell">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="content-wrap">
        <header className="page-header">
          <span className="eyebrow">IDENTIFICAÇÃO DIGITAL</span>
          <span className="header-line" />
        </header>

        <div className="badge-stage">
          <div className={`badge ${flipped ? 'is-flipped' : ''}`}>
            <div className="badge-inner">
              <BadgeFront />
              <BadgeBack />
            </div>
          </div>
        </div>

        <section className="quick-info" aria-label="Informações do verso">
          <div className="quick-heading">
            <span className="quick-dot" />
            <p>Informações do colaborador</p>
          </div>
          <div className="quick-grid">
            <InfoField label="Admissão" value={employee.admission} />
            <InfoField label="Tipo sanguíneo" value={employee.bloodType} />
            <InfoField label="Alergia" value={employee.allergy} />
          </div>
        </section>

        <a className="group-link" href="https://grupolovina.com.br/centraldelinks" target="_blank" rel="noreferrer">
          Conheça o Grupo Lovina <span aria-hidden="true">↗</span>
        </a>
        <footer className="page-footer">
          <span>© 2026 GRUPO LOVINA · TODOS OS DIREITOS RESERVADOS</span>
        </footer>
      </div>
    </main>
  )
}
