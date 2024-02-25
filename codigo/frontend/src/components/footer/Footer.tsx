import Live from '../../assets/LIVE.svg';

export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 -translate-x-4 -translate-y-4">
      <img src={Live} alt="Logo da Vivo" className="w-24 h-auto" />
    </div>
  );
}
