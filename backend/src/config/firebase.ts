import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const projectId = "patrones-graphql";
const clientEmail = "firebase-adminsdk-fbsvc@patrones-graphql.iam.gserviceaccount.com";
let privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDfw5emvCaz44Iu\nLv2B3vCqlbdK0vLJvvc+5EolBZjRTjYM9TDVcLq0q7aCrrPOkYgMHhKAjnFfiQe6\nppGL2TEmM348VaAKEjai8zMtA5IjXuUmsmpComE4ftTNtZNnsJuRiq8Fh+Z2q80i\niGbdg8rAkgjHIVqpUcqBsFiJ4gfeAY32b80c1VNCB4l6PytQHum0bjTrQMfTMCO4\nsswEo+RXSstxn+e8YyXJrH+VduVjaM/ABstNQ4e2XFFeyNUyMKDHmFTngL9ncuoh\nQsxQey6kl6geQJMfEYl+ri6/UK+F7nSxuQV0O6k3YC2lJy201G/IYhPgr1KkK99k\nL5xlv+H3AgMBAAECggEAaiJO0xIZVWfK/nbhXXFOO8splj76U8DVaypDFM5TzqtH\nLdw6nnKKzFlKBzAwLwGOQxkcc4ectNC9LsYE8Q1Cp7jy3lFKyJwc+CtckbRI46gG\nDtW/Wv3EGVTnQO8oDJ2THHRoUbpFEPKqKQADsnvpdm+N5E2ov/kAkYUAad4hFyZI\nLIYzz+SOcHbVqpILlcD/FzdGVgYTMHzkdR/rYkC1+TqR/ZsQujhqyk7VzObazjY5\ngAdE247VqjW+im/rkAqO+Ro/GHHhs6ODybDspQ8texDFsUfRG78jKG1RmRAAfRa+\ngh/rbpUn5jUXQjmi4NQIvqO9sYSbx1vVMDyel2f8+QKBgQD9zQAuloPoqwfw7QQy\nbzqBhi1qaBD4qaJnmObdOWCTneUKBUVG9KFgohHuievJpm+HGLMmCo701qMEmp/c\nNSHs/cL2VH8urchDCz6BSmq2xxkik1aHEvGMtGHvspc1uVh7ysCD2vQoSRx3gbYs\n1PJavQk1gtpkBZ73xSARVJ3EkwKBgQDhs/ZEQTgjkR20KXOdU4Z9o/4nOZ2k5Kep\nHdd5iSfsGGfg5dfpZgAjKj4B0NPFviJ9AScu4H3UpGJAu5MrTsCfHsGHTR63vZ4s\nIwPFfmLeNrtZ1iQlK0+KOMXeIaNAfNkUDCaBTFJ2Clj62kty4fvhFt9xIQKewHva\nUgkrnhIPjQKBgQCI1undNIwEe4p5jOExbCUoRrbf4yIbYCLPJnJ7Hn+Ct6QRBgx3\nGFiWKGvwp+44OANz3I5i2ViAi+UzC0dbzE3xYFSoyaAVA9+wvjRCM2RcDfbwXG5P\nv5f63BrdyPWcIsWhYQzxSrFPszOk/4vAmkPdRoTblCS5vwoZ3u/OSEgT/wKBgBrT\nFajFC5QGkj4wUwJWw/w4umMVEOxhFKAf4NUb/PetauMqzf96VPfY9Geo1xKAZ37t\n3SdQHQRhyR+ia3pRMMl4kU2wV79EtQDP5InbXIrGfHvP3JniTODDoJim7M0kSXR9\ngTIKzR4kWrDtstvjidkVq9a5MqOFgvLOnzJk5gadAoGAScxHhMCczo9UQXaOTwbF\nLuSH8+rDWWZKyl6/UZARwHX2q6R8yYH5e4+iq4bSnWuQxfjT72oUSciuhTHzwCan\nllSFxJZsY0DZLfmcaVcRcImELXlg8c9kM0EDVcJh7Z/rAq4ApOdPFmq9k6O9z0hB\nvhUIh4HIR+myLWfSN503qn0=\n-----END PRIVATE KEY-----\n";

// Heroku/Render/Vercel a veces no preservan saltos de línea:
if (privateKey && privateKey.includes("\\n")) {
  privateKey = privateKey.replace(/\\n/g, "\n");
}

export function getDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }
  return getFirestore();
}
