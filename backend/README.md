# PollParty Backend Deployment

## Quick Deploy to Render.com

1. **Push your code** (make sure backend/.env is in .gitignore)
2. **Go to [Render.com](https://render.com)** and sign up with GitHub
3. **Create New Web Service** → Connect your GitHub repository
4. **Configure the service:**

   - **Name**: `pollparty-backend`
   - **Branch**: `master`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. **Add Environment Variables** in Render dashboard:

   - `MONGODB_PASSWORD` = `lolidog1` (your actual MongoDB password)
   - `PORT` = `3000` (Render will override this automatically)

6. **Deploy** - Render will automatically deploy and give you a URL like:
   `https://pollparty-backend-xxxx.onrender.com`

7. **Update Frontend** - Copy your Render URL and update `.env.production`:
   ```
   VITE_API_URL=https://pollparty-backend-xxxx.onrender.com
   ```

## Alternative: Railway.app

Same process but even simpler - just connect GitHub and Railway auto-detects everything!

## Local Development

```bash
cd backend
npm install
npm run dev  # uses nodemon for auto-restart
```
