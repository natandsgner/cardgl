import Link from 'next/link'
import { leaders } from '../data/leaders'

export default function Page() {
  return <main className="directory"><div><p className="directory-kicker">GRUPO LOVINA</p><h1>Identificação digital</h1><p className="directory-copy">Selecione o perfil de liderança para acessar o crachá individual.</p><nav aria-label="Perfis de liderança">{leaders.map((leader) => <Link key={leader.slug} href={`/${leader.slug}`}>{leader.name}<span>{leader.role}</span></Link>)}</nav></div></main>
}
