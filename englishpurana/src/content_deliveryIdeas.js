export const audienceSegments = [
  {
    id: 'kids',
    name: 'Kids (6–12)',
    format: '45–90 second mythology adventure shorts',
    hook: 'One hero, one problem, one moral.',
    promise: 'Turn Purana lessons into chibi-style, choice-driven stories that are easy to replay with family.',
    channels: ['YouTube Shorts', 'Instagram Reels', 'Choice polls'],
    bestFor: ['Discovery', 'Family sharing'],
    flagship: 'Dharma in 60 Seconds',
  },
  {
    id: 'teens',
    name: 'Teens (13–19)',
    format: '3–6 minute story explainers and debate clips',
    hook: 'Ancient stories for modern decisions.',
    promise: 'Connect dharma dilemmas to friendship, school pressure, anxiety, and social identity.',
    channels: ['Short explainers', 'Live votes', 'Debate clips'],
    bestFor: ['Engagement', 'Conversation'],
    flagship: 'Pick the Dharma',
  },
  {
    id: 'young-adults',
    name: 'College + Early Career (18–30)',
    format: '8–15 minute episodes and podcast snippets',
    hook: 'Productivity, conviction, and emotional regulation.',
    promise: 'Translate Purana wisdom into leadership, discipline, purpose, and resilience frameworks.',
    channels: ['YouTube', 'Podcast clips', 'LinkedIn carousels'],
    bestFor: ['Depth', 'Professional discovery'],
    flagship: 'Purana for Real Life',
  },
  {
    id: 'professionals',
    name: 'Working Professionals (25–45)',
    format: '10-minute commute-first audio reflections',
    hook: 'Story, takeaway, and action prompt in one listen.',
    promise: 'Create a calm daily ritual that fits into commutes and lunch breaks.',
    channels: ['Spotify', 'Apple Podcasts', 'Email course'],
    bestFor: ['Retention', 'Daily habit'],
    flagship: '7-Day Dharma Challenge',
  },
  {
    id: 'families',
    name: 'Parents + Families',
    format: 'Weekend co-watching ritual content',
    hook: 'Story + quiz + craft + family discussion.',
    promise: 'Turn passive viewing into a repeatable family value practice.',
    channels: ['Weekend episodes', 'Printable cards', 'Family quizzes'],
    bestFor: ['Co-viewing', 'Habit building'],
    flagship: 'Family Purana Night',
  },
  {
    id: 'seniors',
    name: 'Seniors (50+)',
    format: 'Slow-paced devotional narration with large text',
    hook: 'Respectful, high-clarity listening and reading.',
    promise: 'Support devotional immersion through Shravana-style playback and readable typography.',
    channels: ['Large-text video', 'Bilingual subtitles', 'Autoplay playlists'],
    bestFor: ['Accessibility', 'Longer sessions'],
    flagship: 'Shravana Mode',
  },
  {
    id: 'diaspora',
    name: 'Diaspora Audiences',
    format: 'Mythology-in-context mini-documentaries',
    hook: 'A cultural identity bridge for second-generation viewers.',
    promise: 'Explain symbolism, geography, and festivals without assuming prior background knowledge.',
    channels: ['Mini-docs', 'Virtual satsang', 'Q&A sessions'],
    bestFor: ['Identity building', 'Community'],
    flagship: 'Mythology in Context',
  },
  {
    id: 'global-seekers',
    name: 'Global Spiritual Seekers',
    format: 'Comparative mythology explainers',
    hook: 'Universal themes first, tradition-specific depth second.',
    promise: 'Make duty, ego, compassion, and transformation legible to newcomers.',
    channels: ['Essay videos', 'Comparative explainers', 'Prompt cards'],
    bestFor: ['Top-of-funnel education', 'Cross-cultural discovery'],
    flagship: 'Ancient Indian Stories, Modern Human Questions',
  },
];

export const launchFranchises = [
  {
    title: 'Dharma in 60 Seconds',
    format: 'Daily shorts',
    outcome: 'High-frequency discovery with one moral per story.',
  },
  {
    title: 'Purana for Real Life',
    format: 'Weekly long-form',
    outcome: 'Build depth through practical applications for modern work and relationships.',
  },
  {
    title: 'Ask the Rishi',
    format: 'Interactive AI/avatar Q&A',
    outcome: 'Create a conversational bridge between archive content and life questions.',
  },
  {
    title: 'Family Purana Night',
    format: 'Weekend ritual content',
    outcome: 'Anchor repeatable co-viewing, quizzes, and discussion prompts.',
  },
  {
    title: 'Quest of the Sages',
    format: 'Gamified learning journey',
    outcome: 'Turn reading into streaks, scenario questions, and unlockable rewards.',
  },
];

export const rolloutPlan = [
  {
    phase: 'Days 1–30 · Validate',
    focus: 'Test discovery hooks and narrator styles.',
    actions: [
      'Publish 20 shorts across courage, ego, devotion, and duty.',
      'Test human voice, AI avatar, and duet narration formats.',
      'Capture emails with a “7 stories for modern life” lead magnet.',
    ],
  },
  {
    phase: 'Days 31–60 · Deepen',
    focus: 'Introduce longer-form trust builders.',
    actions: [
      'Launch a weekly 10-minute long-form episode.',
      'Add quizzes, polls, and audience question collection loops.',
      'Prototype either the chatbot or gamified quiz MVP.',
    ],
  },
  {
    phase: 'Days 61–90 · Scale',
    focus: 'Package the strongest signal into a flagship product.',
    actions: [
      'Launch one interactive product such as Ask the Rishi or a mini-game.',
      'Start partnerships with schools, temples, diaspora communities, and podcast guests.',
      'Formalize repeatable production SOPs and a contributor network.',
    ],
  },
];

export const kpiFramework = [
  {
    label: 'Discovery',
    metric: 'Watch-through rate, shares, saves',
    note: 'Measures whether the hook and packaging travel.',
  },
  {
    label: 'Connection',
    metric: 'Comments per 1,000 views, returning viewers',
    note: 'Shows emotional resonance and audience identity fit.',
  },
  {
    label: 'Depth',
    metric: 'Long-form completion rate, listen duration',
    note: 'Signals whether viewers trust the deeper teaching layer.',
  },
  {
    label: 'Conversion',
    metric: 'Email signups, app installs, community joins',
    note: 'Tracks movement from casual attention into owned audience.',
  },
  {
    label: 'Retention',
    metric: '7-day and 30-day return rate',
    note: 'Validates that rituals, streaks, and prompts are working.',
  },
];

export const interactiveProducts = [
  {
    title: 'Ask the Rishi',
    description: 'An AI-avatar guide that adapts tone and depth for kids, families, and reflective adults.',
    prompts: [
      'Tell me a story about handling anger.',
      'Give me a bedtime Purana for my 8-year-old.',
      'What does Prahlada teach about conviction under pressure?',
    ],
  },
  {
    title: 'Quest of the Sages',
    description: 'A gamified reading path with scenario questions, Dharma points, and unlockable story archives.',
    prompts: ['Story quests by Purana', 'Character cards', 'Moral alignment meter'],
  },
  {
    title: 'Family Value Cards',
    description: 'Printable cards that pair one story, one reflection, and one activity for weekend rituals.',
    prompts: ['Story recap', 'Craft idea', 'Family discussion question'],
  },
  {
    title: 'Festival Content Calendar',
    description: 'A seasonal programming layer that maps stories and themes to major Hindu festivals.',
    prompts: ['Navratri themes', 'Janmashtami family stories', 'Maha Shivaratri reflections'],
  },
];

export const ideaPrinciples = [
  'Start with one audience and one flagship format before expanding.',
  'Package ancient wisdom in modern, accessible, age-appropriate language.',
  'Create interaction loops through quizzes, polls, streaks, and Q&A.',
  'Make the archive usable for readers, listeners, families, and educators.',
  'Track discovery, depth, conversion, and retention—not just page views.',
];
