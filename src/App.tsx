import './App.css';
import { Heart, HeartCrack, HeartHandshake } from 'lucide-react';

const IMG = 'https://www.tvguide.com/a/img/hub/2026/02/09';

interface Person {
  name: string;
  age: number;
  job: string;
  img: string;
}

type Status = 'Engaged' | 'Married' | 'Separated';

interface Couple {
  her: Person;
  him: Person;
  status: Status;
  note?: string;
}

interface Single {
  name: string;
  age: number;
  job: string;
  img: string;
}

const couples: Couple[] = [
  {
    her: { name: 'Christine Hamilton',   age: 31, job: 'Speech-Language Pathologist', img: `${IMG}/8dcb7772-61d8-4638-9175-e2b74fe1e8c5/christine-lib.jpg` },
    him: { name: 'Victor St. John',      age: 34, job: 'Professor',                   img: `${IMG}/ecff1de1-d96a-4c45-bc6f-9c71948edc7b/victor-lib.jpg` },
    status: 'Engaged',
    note: 'First to get engaged',
  },
  {
    her: { name: 'Amber Morrison',  age: 34, job: 'Nurse Practitioner',  img: `${IMG}/8164cd53-d0b5-440c-bd31-df0ca67aaba7/lib-amber.jpg` },
    him: { name: 'Jordan Faeth',    age: 34, job: 'Account Executive',   img: `${IMG}/c1aeb2e5-44ab-4bf0-afc2-45178804e033/jordan-lib.jpg` },
    status: 'Engaged',
  },
  {
    her: { name: 'Emma Betsinger',  age: 28, job: 'Retail Merchandising', img: `${IMG}/bf96c7ad-d47f-4e74-b564-d46b36b5d899/emma-lib.jpg` },
    him: { name: 'Mike Gibney',     age: 30, job: 'Sales Manager',        img: `${IMG}/72aecc0e-e226-4d9f-8883-0cc105cf5cb4/mike-lib.jpg` },
    status: 'Engaged',
    note: 'Clash over having kids',
  },
  {
    her: { name: 'Ashley Carpenter',  age: 34, job: 'Claims Manager',    img: `${IMG}/f36f49ec-4336-446c-aec8-4935b21043f8/lib-ashley.jpg` },
    him: { name: 'Alex Henderson',    age: 31, job: 'Financial Sales',   img: `${IMG}/095d5c41-e0f5-4e6f-8b0b-f27d2c517921/alex-lib.jpg` },
    status: 'Engaged',
  },
  {
    her: { name: 'Brittany Wicker',    age: 33, job: 'Registered Nurse', img: `${IMG}/f3a76e27-63c4-482d-81e8-88d502ecae6b/britt-lib.jpg` },
    him: { name: 'Devonta Anderson',   age: 32, job: 'Loan Officer',     img: `${IMG}/7503c93a-7b6b-4e85-837c-a158380a3526/devo-lib.jpg` },
    status: 'Engaged',
  },
  {
    her: { name: 'Bri McNees',    age: 34, job: 'Senior Merchant',    img: `${IMG}/5bbdb4f7-9665-45f7-accb-d7cd448bb4c7/brianna-lib.jpg` },
    him: { name: 'Connor Spies',  age: 32, job: 'Account Management', img: `${IMG}/22f42fe2-f844-4334-8a8a-217dc7c67f0a/connor-lib.jpg` },
    status: 'Separated',
  },
  {
    her: { name: 'Jessica Barrett',  age: 39, job: 'Infectious Diseases Physician', img: `${IMG}/b75ebed1-9686-4c67-8d9d-6bbb16bfc65d/jessica-lib.jpg` },
    him: { name: 'Chris Fusco',      age: 33, job: 'Account Executive',             img: `${IMG}/ed67f9f3-5cb3-4bdb-8fa7-63c15b7155da/chris-lib.jpg` },
    status: 'Separated',
    note: 'Split in episode 9',
  },
];

const singles: Single[] = [
  { name: 'Brittany Steward', age: 37, job: 'Flight Attendant',        img: `${IMG}/9954a7e3-c644-4368-9ad6-bde67b6179f8/lib-brit.jpg` },
  { name: 'Bry Thomas',       age: 30, job: 'Commercial Real Estate',  img: `${IMG}/20e1f279-861c-45e0-87e0-0f5f9d6221e2/bry-lib.jpg` },
  { name: 'Dynasty Ballard',  age: 33, job: 'Senior Marketing Mgr.',   img: `${IMG}/ad054d16-b231-47ec-a117-e669ba17197b/dynasty-lib.jpg` },
  { name: 'Elissa Finley',    age: 39, job: 'Nurse',                   img: `${IMG}/70e76554-cce0-4c3e-acb4-f605602c6ec0/lib-elissa.jpg` },
  { name: 'Jennifer Underwood', age: 32, job: 'Financial Professional', img: `${IMG}/654e7301-45d6-4df8-a2fa-34e84bcbc838/jennifer-lib.jpg` },
  { name: 'Keya Kellum',      age: 31, job: 'Marketing Director',      img: `${IMG}/f857cfdb-23c5-48a3-b7f4-a45340aa1d55/keya-lib.jpg` },
  { name: 'Priyanka Grandhi', age: 34, job: 'Recruiter',               img: `${IMG}/c0cead37-a7bc-4470-a24b-8178aa142a8e/priyanka-lib.jpg` },
  { name: 'Rosalyn Ransaw',   age: 31, job: 'Marketing Manager',       img: `${IMG}/4a9ef752-13bf-4504-810b-4944322f994b/rosalyn-lib.jpg` },
  { name: 'Tyler Lanier',     age: 33, job: 'Sales Leader',            img: `${IMG}/adc1c801-352f-4ad7-a374-c6736e6e944e/tyler-lib.jpg` },
  { name: 'Alex Lowrie',      age: 33, job: 'Assistant Controller',    img: `${IMG}/3fc80508-965a-491c-8b24-c82503692fba/alexl-lib.jpg` },
  { name: 'Brennan O\'Callaghan', age: 30, job: 'Finance Manager',     img: `${IMG}/6c926512-5ec4-46e7-95a6-8e778b035ec5/brennan-lib.jpg` },
  { name: 'Haramol Gill',     age: 36, job: 'E.R. Doctor',             img: `${IMG}/5ad77ba0-e3b7-4647-9532-0f467b4cf9c0/haramol-lib.jpg` },
  { name: 'Kevan Jones',      age: 32, job: 'Realtor',                 img: `${IMG}/9f44db52-49b7-4173-9e19-8c10c092b2b9/kevan-lib.jpg` },
  { name: 'Kevin VerHoef',    age: 35, job: 'CPA',                     img: `${IMG}/6236f46e-c3a8-4339-b62f-a02c1d27e061/kevin-lib.jpg` },
  { name: 'Miguel Lopez',     age: 32, job: 'Software Engineer',       img: `${IMG}/3cce571a-c1ff-4ca8-944b-dd8990d3461e/miguel-lib.jpg` },
  { name: 'Parker Knapp',     age: 29, job: 'Business Owner',          img: `${IMG}/1e503e8c-2712-4be6-b804-ebdc2fc14d02/parker-lib.jpg` },
  { name: 'Steven Sunday',    age: 32, job: 'Finance',                 img: `${IMG}/b142e433-1118-4183-a7d7-d0133ffb4b60/steven-lib.jpg` },
  { name: 'Tyler Hunt',       age: 32, job: 'Management Consultant',   img: `${IMG}/4c209a17-5a1a-4b6c-b765-42dfb4940523/tyler-lib.jpg` },
];

function StatusBadge({ status }: { status: Status }) {
  if (status === 'Engaged') return (
    <span className="badge engaged"><Heart size={13} /> Engaged</span>
  );
  if (status === 'Married') return (
    <span className="badge married"><HeartHandshake size={13} /> Married</span>
  );
  return (
    <span className="badge separated"><HeartCrack size={13} /> Separated</span>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <div className="person">
      <img src={person.img} alt={person.name} />
      <div className="person-name">{person.name}</div>
      <div className="person-meta">{person.age} · {person.job}</div>
    </div>
  );
}

function CoupleCard({ couple }: { couple: Couple }) {
  return (
    <div className={`couple-card ${couple.status.toLowerCase()}`}>
      <div className="couple-photos">
        <PersonCard person={couple.her} />
        <div className="heart-divider">
          {couple.status === 'Separated'
            ? <HeartCrack size={28} className="heart-icon separated" />
            : <Heart size={28} className="heart-icon" />}
        </div>
        <PersonCard person={couple.him} />
      </div>
      <div className="couple-footer">
        <StatusBadge status={couple.status} />
        {couple.note && <span className="couple-note">{couple.note}</span>}
      </div>
    </div>
  );
}

export default function App() {
  const engagedCount = couples.filter(c => c.status === 'Engaged').length;
  const marriedCount = couples.filter(c => c.status === 'Married').length;
  const separatedCount = couples.filter(c => c.status === 'Separated').length;

  return (
    <div className="page">
      <header>
        <div className="header-title">
          <div className="eyebrow">Netflix · Ohio</div>
          <h1>Love is Blind</h1>
          <div className="season">Season 10</div>
        </div>
        <div className="header-stats">
          <div className="stat"><Heart size={15} /> {engagedCount} Engaged</div>
          {marriedCount > 0 && <div className="stat"><HeartHandshake size={15} /> {marriedCount} Married</div>}
          <div className="stat"><HeartCrack size={15} /> {separatedCount} Separated</div>
        </div>
      </header>

      <main>
        <section>
          <h2 className="section-title">The Couples</h2>
          <div className="couples-grid">
            {couples.map((couple) => (
              <CoupleCard key={couple.him.name} couple={couple} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Didn't Get Engaged</h2>
          <div className="singles-grid">
            {singles.map((s) => (
              <div className="single-card" key={s.name}>
                <img src={s.img} alt={s.name} />
                <div className="single-name">{s.name}</div>
                <div className="single-meta">{s.age} · {s.job}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
