$content = Get-Content -Path "roadmap.html" -Raw

$buttonsToReplace = @"
                  <div class="flex items-center gap-3 mt-5 pt-3">
                    <button class="btn-secondary flex-1 py-2.5 text-[14px] bg-[#EEF1F7] text-[#333B4A] hover:bg-[#E2E7F0]">Skip stage</button>
                    <button class="btn-primary flex-1 py-2.5 text-[14px] shadow-md hover:shadow-lg">Mark complete</button>
                  </div>
"@

$buttonsReplacement = @"
                  <div class="flex items-center gap-3 mt-5 pt-3">
                    <button class="btn-secondary flex-1 py-2.5 text-[14px] bg-[#EEF1F7] text-[#333B4A] hover:bg-[#E2E7F0]" onclick="handleStageAction(4, 'skip')">Skip stage</button>
                    <button class="btn-primary flex-1 py-2.5 text-[14px] shadow-md hover:shadow-lg" onclick="handleStageAction(4, 'complete')">Mark complete</button>
                  </div>
"@

$content = $content.Replace($buttonsToReplace, $buttonsReplacement)

$scriptToReplace = @"
    <script>
      // Stage accordion
"@

$scriptReplacement = @"
    <script>
      function handleStageAction(stageNum, action) {
        const currentStage = document.querySelector(`.roadmap-stage[data-stage="` + stageNum + `"]`);
        const nextStage = document.querySelector(`.roadmap-stage[data-stage="` + (stageNum + 1) + `"]`);
        
        if (!currentStage) return;

        // 1. Close current stage accordion
        const resources = currentStage.querySelector('.stage-resources');
        const chevron = currentStage.querySelector('.stage-chevron');
        if (resources) resources.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
        
        // 2. Remove "current" visual state from the current stage card
        currentStage.classList.remove('current');
        const card = currentStage.querySelector('.max-w-\\[380px\\]');
        if (card) {
          card.classList.remove('border-[#3B62F6]', 'ring-4', 'ring-[#EFF4FF]');
          card.classList.add(action === 'complete' ? 'border-[#E8F8EE]' : 'border-[#EEF1F7]');
          const topGradient = card.querySelector('.bg-gradient-to-r');
          if (topGradient) topGradient.remove();
        }

        // 3. Update the tag status (Done / Skipped)
        const tag = currentStage.querySelector('.uppercase.tracking-wide');
        if (tag) {
          tag.textContent = action === 'complete' ? 'Done' : 'Skipped';
          tag.className = action === 'complete' 
            ? 'text-[12px] font-semibold text-[#0B7038] mb-1 uppercase tracking-wide'
            : 'text-[12px] font-semibold text-[#6B7689] mb-1 uppercase tracking-wide';
        }

        // 4. Update the center node icon
        const centerIcon = currentStage.querySelector('.rounded-full.border-\\[3px\\]');
        if (centerIcon) {
          if (action === 'complete') {
            centerIcon.className = 'hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE,0_4px_10px_rgba(0,0,0,0.05)] z-20 transition-transform group-hover:scale-110';
            centerIcon.innerHTML = '<svg class="w-6 h-6 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
          } else {
            centerIcon.className = 'hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#F5F7FB] shadow-[0_0_0_6px_#FBFCFE,0_4px_10px_rgba(0,0,0,0.05)] z-20 transition-transform group-hover:scale-110 text-[#6B7689] font-bold text-[14px]';
            centerIcon.innerHTML = '-';
          }
        }

        // 5. Update the mobile icon
        const mobileIcon = currentStage.querySelector('.md\\:hidden');
        if (mobileIcon) {
           if (action === 'complete') {
             mobileIcon.className = 'md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#12A150] bg-[#E8F8EE] shadow-[0_0_0_6px_#FBFCFE] z-10';
             mobileIcon.innerHTML = '<svg class="w-5 h-5 text-[#12A150]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
           } else {
             mobileIcon.className = 'md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#E2E7F0] bg-[#FBFCFE] shadow-[0_0_0_6px_#FBFCFE] z-10 text-[#9AA5BB] font-bold text-[13px]';
             mobileIcon.innerHTML = '-';
           }
        }

        // 6. Change connector line color
        const connector = currentStage.querySelector('.bg-gradient-to-r, .bg-gradient-to-l');
        if (connector) {
           connector.className = connector.className.replace('to-[#3B62F6]', action === 'complete' ? 'to-[#12A150]' : 'to-[#E2E7F0]');
           connector.classList.add('opacity-60');
        }

        // 7. Remove action buttons to clean up UI
        const actionButtons = currentStage.querySelector('.btn-primary')?.parentElement;
        if (actionButtons) actionButtons.remove();

        // 8. Promote the NEXT stage to "Current"
        if (nextStage) {
          nextStage.classList.add('current');
          const nextTag = nextStage.querySelector('.uppercase.tracking-wide');
          if (nextTag) {
            nextTag.textContent = 'You are here';
            nextTag.className = 'inline-block px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase bg-[#EFF4FF] text-[#3B62F6] rounded mb-3';
          }
          
          const nextCenterIcon = nextStage.querySelector('.rounded-full.border-\\[3px\\]');
          if (nextCenterIcon) {
            nextCenterIcon.className = 'hidden md:flex absolute left-1/2 top-6 -mt-6 -ml-6 items-center justify-center w-12 h-12 rounded-full border-[3px] border-[#FBFCFE] bg-[#3B62F6] shadow-[0_0_0_6px_#FBFCFE,0_0_25px_rgba(59,98,246,0.8)] z-20 text-white font-bold text-lg animate-pulse';
          }

          const nextMobileIcon = nextStage.querySelector('.md\\:hidden');
          if (nextMobileIcon) {
            nextMobileIcon.className = 'md:hidden absolute left-[20px] top-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#EFF4FF] bg-[#3B62F6] shadow-[0_0_0_6px_#FBFCFE,0_0_15px_rgba(59,98,246,0.6)] z-10 text-white font-bold text-sm';
          }
          
          const nextCard = nextStage.querySelector('.max-w-\\[380px\\]');
          if (nextCard) {
            nextCard.classList.remove('bg-white/60', 'border-[#EEF1F7]', 'shadow-[0_4px_15px_rgba(0,0,0,0.02)]', 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]', 'hover:bg-white/95');
            nextCard.classList.add('bg-white/95', 'border-[#3B62F6]', 'shadow-[0_12px_40px_rgba(59,98,246,0.15)]', 'hover:shadow-[0_16px_50px_rgba(59,98,246,0.2)]', 'ring-4', 'ring-[#EFF4FF]');
            nextCard.insertAdjacentHTML('afterbegin', '<div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6087FB] to-[#3B62F6]"></div>');
          }
          
          const nextConnector = nextStage.querySelector('.bg-gradient-to-r, .bg-gradient-to-l');
          if (nextConnector) {
             nextConnector.className = nextConnector.className.replace('to-[#E2E7F0]', 'to-[#3B62F6]');
             nextConnector.classList.remove('opacity-60');
          }
          
          const titleText = nextStage.querySelector('.text-\\[17px\\]');
          if (titleText) titleText.classList.replace('text-[#333B4A]', 'text-[#0F1420]');

          // Auto-expand accordion for the new stage
          const nextResources = nextStage.querySelector('.stage-resources');
          const nextChevron = nextStage.querySelector('.stage-chevron');
          if (nextResources) nextResources.classList.remove('hidden');
          if (nextChevron) nextChevron.classList.add('rotate-180');
          
          // Scroll to the new stage smoothly
          setTimeout(() => {
            nextStage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 300);
        }
      }

      // Stage accordion
"@

$content = $content.Replace($scriptToReplace, $scriptReplacement)

$content | Set-Content -Path "roadmap.html"
