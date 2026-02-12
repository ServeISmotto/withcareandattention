// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Muslim Guyyy",
  partnerName: "Simran",

  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began (Singapore timezone: +08:00)
  // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
  relationshipStart: "2025-11-20T16:00:00+16:00",

  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",

  // === HEADLINE AND INTRO ===
  heroHeadline: "To My love, Simran.",
  heroSubtext: "A journey through our moments together, celebrating every ups and downs, every emotion, and every conversation and text we've shared till now.",

  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 5,

  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "𝕸𝖆𝖌𝖓𝖎𝖋𝖎𝖈𝖊𝖓𝖙 𝕭𝖑𝖎𝖕.",
      date: "June 1, 2025",
      description: "So we came across each huh!!, what are the chances of that happening?, but we 'MET', that matters and yes sooo many people in frame, but we found each other, One of the few moments where some one grabbed my attention that quick!!"
    },
    {
      title: "𝕭𝖊𝖑𝖔𝖛𝖊𝖉.",
      date: "Nov 20, 2025",
      description: "On this day, we took a leap to become something more meaningful and to be there for each other in every phase of life, and thanks for being my purpose, and that driving force that will take me miles ahead."
    },
    {
      title: "𝕺𝖇𝖘𝖊𝖘𝖘𝖊𝖉.",
      date: "Dec 9, 2025",
      description: "Hey I just found out that you like silence too, and that fact was soo comferting for me and I was just soo settled that and Into your eyes, I LOVE THE CALMNESS YOU BRING WITH YOU."
    },
    {
      title: "𝕰𝖝𝖈𝖎𝖙𝖊𝖒𝖊𝖓𝖙.",
      date: "Jan 26, 2026",
      description: "I was soo excited to see you to be honest, and we did something together for the first time and it worked out soo well, I was soo happy to see you."
    },
    {
      title: "𝕰𝖒𝖔𝖙𝖎𝖔𝖓𝖘.",
      date: "Feb 3, 2026",
      description: "I felt soo high on emotions to watch movie that movie with you and to experience that rush of emotions along side you, it was really special for me."
    }
  ],

  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "moin.connect765@gmail.com", // Replace with your actual email
  emailSubject: "Answer",
  emailBody: "Yes! I'd love to be your Valentine! 💕\n\nLove always,\n",

  // === INVITE DETAILS ===
  inviteTitle: "Will You Be My Valentine?",
  inviteMessage: "Join me for a magical evening on February 14th for a virtual Movie date of your choice. Let's make more cool memories together.",
  inviteDate: "February 14, 2026",
  inviteTime: "Post 11:00 PM",
  inviteLocation: "Gmeet awaits us...",
};

export default loveConfig;
