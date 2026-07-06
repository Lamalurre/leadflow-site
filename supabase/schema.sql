create table if not exists leadflow_contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  business_type text,
  message text not null
);

alter table leadflow_contacts enable row level security;

create policy "Allow anon insert"
  on leadflow_contacts
  for insert
  to anon
  with check (true);
