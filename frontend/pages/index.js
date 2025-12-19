import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout';
import styles from '../styles/LandingPage.module.css';

const games = [
  {
    title: 'Neon Drift',
    genre: 'Racing',
    blurb: 'Dash through neon skylines, upgrade your ride, and outrun the leaderboard.',
  },
  {
    title: 'Starfall Tactics',
    genre: 'Strategy',
    blurb: 'Command fleets, conquer sectors, and forge alliances in a living galaxy.',
  },
  {
    title: 'Mystic Hollow',
    genre: 'Adventure',
    blurb: 'Solve ancient puzzles, tame forest spirits, and unravel the Hollow’s secret.',
  },
];

const features = [
  { title: 'Curated Worlds', copy: 'Discover story-driven titles and quick-fire arcade hits in one place.' },
  { title: 'Play Anywhere', copy: 'Optimized for desktop, tablet, and mobile so you never drop the action.' },
  { title: 'Instant Access', copy: 'Jump in with one tap—no installs, no waiting, just pure gameplay.' },
  { title: 'Community Events', copy: 'Daily tournaments, seasonal drops, and exclusive creator spotlights.' },
];

export default function LandingPage({ darkMode, toggleDarkMode }) {
  const router = useRouter();

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Box className={styles.hero}>
        <Stack spacing={2}>
          <Chip label="New" color="primary" className={styles.badge} />
          <Typography variant="h3" component="h1" fontWeight={800}>
            Play bold. <span className={styles.highlight}>Discover</span> the games everyone is talking about.
          </Typography>
          <Typography variant="h6" component="p" className={styles.subhead}>
            Build your squad, unlock achievements, and stream-ready moments—all from one landing hub
            designed for gamers.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large" onClick={() => router.push('/signup')}>
              Start free
            </Button>
            <Button variant="outlined" size="large" onClick={() => router.push('/dashboard')}>
              View dashboard
            </Button>
          </Stack>
        </Stack>
        <Box className={styles.heroCard}>
          <Typography variant="overline" color="text.secondary" letterSpacing={2}>
            TODAY’S SPOTLIGHT
          </Typography>
          <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 1 }}>
            Velocity Season Pass
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Unlock the Driftblade, speed trials, and three exclusive neon arenas. Hit Tier 10 to earn
            the animated “Afterburn” banner.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Chip label="Limited" color="secondary" size="small" />
            <Chip label="Multiplayer" variant="outlined" size="small" />
          </Stack>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
            onClick={() => router.push('/signup')}
          >
            Claim your pass
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="overline" color="text.secondary">
          Top picks
        </Typography>
        <Typography variant="h4" component="h3" fontWeight={700} sx={{ mb: 3 }}>
          Games everyone is grinding right now
        </Typography>
        <Grid container spacing={3}>
          {games.map(game => (
            <Grid item xs={12} md={4} key={game.title}>
              <Card className={styles.gameCard}>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" fontWeight={700}>
                      {game.title}
                    </Typography>
                    <Chip label={game.genre} size="small" color="primary" variant="outlined" />
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                    {game.blurb}
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => router.push('/signup')}
                  >
                    Jump in
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="overline" color="text.secondary">
          Why players stay
        </Typography>
        <Typography variant="h4" component="h3" fontWeight={700} sx={{ mb: 3 }}>
          Built to keep your streak alive
        </Typography>
        <Grid container spacing={3}>
          {features.map(feature => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card className={styles.featureCard}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {feature.copy}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className={styles.cta}>
        <Stack spacing={2}>
          <Typography variant="h4" component="h3" fontWeight={800}>
            Ready to press start?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Create your account, sync your library, and be the first to drop into new releases and live events.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large" color="secondary" onClick={() => router.push('/signup')}>
              Create account
            </Button>
            <Button variant="outlined" size="large" onClick={() => router.push('/dashboard')}>
              Explore dashboard
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}
