"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Play, X } from "lucide-react";

const driveFileId = "1I04vmcBuLksiKL_GJXsG56tIXrCQf4b8";
const driveViewUrl = `https://drive.google.com/file/d/${driveFileId}/view`;
const drivePreviewUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;

export function DriveFilmButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="artist-drive-film-trigger">
          <span className="artist-drive-film-icon"><Play size={14} fill="currentColor" /></span>
          Watch the director&apos;s film
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="artist-drive-film-overlay" />
        <Dialog.Content className="artist-drive-film-dialog">
          <div className="artist-drive-film-dialog-bar">
            <div>
              <p>Artist Nation</p>
              <Dialog.Title>Director&apos;s film</Dialog.Title>
            </div>
            <div className="artist-drive-film-dialog-actions">
              <a href={driveViewUrl} target="_blank" rel="noopener noreferrer">
                Open in Drive <ExternalLink size={14} />
              </a>
              <Dialog.Close className="artist-drive-film-close" aria-label="Close director's film">
                <X size={18} />
              </Dialog.Close>
            </div>
          </div>
          <div className="artist-drive-film-player">
            <iframe
              src={drivePreviewUrl}
              title="Artist Nation director's film"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
