'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import loveConfig from '@/config/loveConfig';
import styles from './InviteCard.module.css';

interface InviteCardProps {
  onPlayAgain: () => void;
  onNoResponse?: () => void;
  onYesResponse?: () => void;
}

export default function InviteCard({ onPlayAgain, onNoResponse, onYesResponse }: InviteCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleYesClick = () => {
    // Trigger confetti if handler provided
    if (onYesResponse) {
      onYesResponse();
    }
    // Show celebration modal or directly trigger actions
    alert('🎉 Yay! I knew you would say yes... I can\'t wait to celebrate with you!! 💕');
  };

  const handleNoClick = () => {
    // Show notification and stop animation
    if (onNoResponse) {
      onNoResponse();
    }
    setShowWarning(true);
  };
  // ... existing code ...


  const handleAddToCalendar = () => {
    // Generate .ics file content
    const event = {
      title: `Valentine's Day with ${loveConfig.yourName}`,
      description: loveConfig.inviteMessage,
      location: loveConfig.inviteLocation,
      startDate: new Date(loveConfig.valentineDate + 'T19:00:00+08:00'), // 7:00 PM Singapore time
      endDate: new Date(loveConfig.valentineDate + 'T23:00:00+08:00'),
    };

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Valentine's Day//EN
BEGIN:VEVENT
UID:${Date.now()}@valentines2026
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(event.startDate)}
DTEND:${formatDate(event.endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:Reminder: Valentine's Date in 2 hours!
END:VALARM
END:VEVENT
END:VCALENDAR`;

    // Create blob and download
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'valentines-date-2026.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleSendAnswer = () => {
    const subject = encodeURIComponent(loveConfig.emailSubject);
    const body = encodeURIComponent(loveConfig.emailBody + loveConfig.partnerName);
    window.location.href = `mailto:${loveConfig.yourEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className={styles.inviteContainer}
      ref={containerRef}
    >
      <div className={styles.inviteCard}>
        <h2 className={styles.inviteTitle}>{loveConfig.inviteTitle}</h2>

        <div className={styles.catRoseContainer}>
          <Image
            src="/cat-rose.gif"
            alt="Cat with rose"
            width={200}
            height={200}
            className={styles.catRoseGif}
            unoptimized
          />
        </div>

        <div className={styles.inviteDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📅</span>
            <div>
              <div className={styles.detailLabel}>Date</div>
              <div className={styles.detailValue}>{loveConfig.inviteDate}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>🕐</span>
            <div>
              <div className={styles.detailLabel}>Time</div>
              <div className={styles.detailValue}>{loveConfig.inviteTime}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📍</span>
            <div>
              <div className={styles.detailLabel}>Location</div>
              <div className={styles.detailValue}>{loveConfig.inviteLocation}</div>
            </div>
          </div>
        </div>

        <p className={styles.inviteMessage}>{loveConfig.inviteMessage}</p>

        <div className={styles.actionButtons}>
          <button
            className={`btn-primary ${styles.yesButton}`}
            onClick={handleYesClick}
          >
            Yes! I'd Love To! 💕
          </button>

          <button
            className={`btn-secondary ${styles.noButton}`}
            onClick={handleNoClick}
          >
            No 😢
          </button>

          <div className={styles.secondaryActions}>
            <button
              className="btn-secondary"
              onClick={handleAddToCalendar}
            >
              📅 Add to Calendar
            </button>

            <button
              className="btn-secondary"
              onClick={handleSendAnswer}
            >
              💌 Send My Answer
            </button>
          </div>
        </div>

        <div className={styles.playAgainSection}>
          <button
            className={styles.playAgainButton}
            onClick={onPlayAgain}
          >
            🎮 Play Game Again
          </button>
        </div>
      </div>
      {showWarning && (
        <div className={styles.warningOverlay}>
          <div className={styles.warningBox}>
            <button
              className={styles.closeButton}
              onClick={() => setShowWarning(false)}
              aria-label="Close warning"
            >
              ✕
            </button>
            <div className={styles.warningHeader}>
              <span className={styles.warningIcon}>⚠️</span>
              <h3 className={styles.warningTitle}>NOTICE</h3>
            </div>
            <p className={styles.warningText}>
              This feature isn't available as of now, for further clarifications contact developer at the earliest convenience with proper documentation to support your decision.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
