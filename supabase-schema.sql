create table if not exists public.daily_results (
  id uuid primary key default gen_random_uuid(),
  play_date date not null,
  nickname text not null check (char_length(nickname) between 2 and 18),
  challenge_title text not null,
  guess numeric not null,
  actual_price numeric not null,
  difference numeric not null,
  percent_off numeric not null,
  score integer not null check (score between 0 and 100),
  awards text[] not null default '{}',
  created_at timestamptz not null default now(),
  unique (play_date, nickname)
);

alter table public.daily_results enable row level security;

create policy "Public can read daily results"
  on public.daily_results
  for select
  to anon
  using (true);

create policy "Public can insert one daily result"
  on public.daily_results
  for insert
  to anon
  with check (true);
