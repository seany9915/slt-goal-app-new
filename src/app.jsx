import React, { useState, useEffect } from 'react';

// Manually constructed data based on the provided Goal Inventory.docx content
const goalInventoryData = {
  "targetAreas": {
    "Articulation and Phonology": {
      "goals": [
        { "text": "produce /p/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /b/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /t/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /d/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /m/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /n/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /h/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /f/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /v/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /k/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /g/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"ch\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"j\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"sh\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /l/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /s/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /z/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /l/-blends", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /s/-blends", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /r/-blends", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"th\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"ng\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /r/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce 2-syllable words", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce 3-syllable words", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce 4-syllable words", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce intelligible words", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce backing by producing /t/ and /d/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce fronting by producing /k/ and /g/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce gliding by producing /l/ and /r/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing /f/ and /v/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing /s/ and /z/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing /f/ and /s/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing /v/ and /z/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing \"sh,\" \"ch,\" and \"j\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing \"th\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing fricatives", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce stopping by producing affricates", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce vowelization by producing /l/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce final consonant deletion by producing final consonants", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce initial consonant deletion by producing initial consonants", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce cluster reduction by producing clusters", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce syllable deletion by producing 2-syllable words", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce syllable deletion by producing 3-syllable words", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce syllable deletion by producing 4-syllable words", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce prevocalic voicing by producing prevocalic voiceless consonants", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "reduce final consonant devoicing by producing final voice consonants", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /str-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /skr-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /spr-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /skw-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /spl-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /sl-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /fl-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /fr-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /shr-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce /thr-/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce prevocalic /r/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce vocalic /r/", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce voiceless \"th\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce voiced \"th\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"air\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"ar\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"ear\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"er\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"ire\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] },
        { "text": "produce \"or\"", "levels": ["in isolation", "in syllables", "in all positions of words", "in phrases", "in structured sentences", "in spontaneous sentences", "in oral reading tasks", "in structured conversation", "in spontaneous speech", "in final position of words", "in initial position of words", "in medial position of words"] }
      ]
    },
    "Phonological Awareness": {
      "goals": [
        { "text": "listen to a word and verbally identify the first phoneme", "levels": [] },
        { "text": "listen to a word and verbally identify the last phoneme", "levels": [] },
        { "text": "listen to a word and verbally identify the middle phoneme", "levels": [] },
        { "text": "listen to individual sounds and blend the phonemes to form a word", "levels": [] },
        { "text": "listen to a word and identify the number of sounds in the word (phoneme segmentation)", "levels": [] },
        { "text": "produce the individual sounds in a stimulus word (e.g., /k/ /a/ /t/ for \"cat\")", "levels": [] },
        { "text": "delete phonemes in words to form new words", "levels": [] },
        { "text": "substitute phonemes in words to form new words", "levels": [] }
      ]
    },
    "Vocabulary": {
      "goals": [
        {
          "text": "define grade level vocabulary words",
          "subGoalLevels": [
            { "text": "Level 1 - Grades K-2", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 2 - Grades 3-5", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 3 - Grades 6-8", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 4 - Grades 9-12", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] }
          ]
        },
        {
          "text": "use context clues to define unknown words",
          "subGoalLevels": [
            { "text": "Level 1 - Grades K-2", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 2 - Grades 3-5", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 3 - Grades 6-8", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] }
          ]
        },
        { "text": "define idioms", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        {
          "text": "define multiple meaning words",
          "subGoalLevels": [
            { "text": "Level 1 - Grades K-2", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 2 - Grades 3-5", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 3 - Grades 6-8", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 4 - Grades 9-12", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] }
          ]
        },
        { "text": "name objects", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "identify spatial concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "name spatial concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "identify temporal concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "name temporal concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "identify qualitative concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "name qualitative concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "identify quantitative concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "name quantitative concepts", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "identify comparatives (e.g., big/bigger, small/smaller)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "name comparatives (e.g., big/bigger, small/smaller)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "identify superlatives (e.g., smallest, biggest)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "name superlatives (e.g., smallest, biggest)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "sort items by category", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        {
          "text": "name items in categories",
          "subGoalLevels": [
            { "text": "Level 1 - Basic", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 2 - Early Elementary", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 3 - Later Elementary", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 4 - Secondary", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] }
          ]
        },
        {
          "text": "name a category when given three items",
          "subGoalLevels": [
            { "text": "Level 1 - Basic", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 2 - Early Elementary", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 3 - Later Elementary", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
            { "text": "Level 4 - Secondary", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] }
          ]
        },
        { "text": "describe an item using 2/7 descriptors (e.g., category, function, appearance, parts, location)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "describe an item using 3/7 descriptors (e.g., category, function, appearance, parts, location)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "describe an item using 4/7 descriptors (e.g., category, function, appearance, parts, location)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "describe an item using 5/7 descriptors (e.g., category, function, appearance, parts, location)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "describe an item using 6/7 descriptors (e.g., category, function, appearance, parts, location)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "describe an item using 7/7 descriptors (e.g., category, function, appearance, parts, location)", "levels": ["in context", "without context", "when given objects", "when given pictures", "during academic instruction"] },
        { "text": "state 2 differences", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "state 3 differences", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "state 4 differences", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "state 5 differences", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "state 2 similarities", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "state 3 similarities", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "state 4 similarities", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "state 5 similarities", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "compare/contrast (providing 2 similarities/differences)", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "compare/contrast (providing 3 similarities/differences)", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "compare/contrast (providing 4 similarities/differences)", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        { "text": "compare/contrast (providing 5 similarities/differences)", "levels": ["when given two pictures", "when given two picture scenes", "when given two vocabulary words", "when given characters in a story", "when given two stories"] },
        {
          "text": "name antonyms",
          "subGoalLevels": [
            { "text": "Level 1 - Early Elementary", "levels": ["when given a picture", "when given a word", "when given a word within a sentence", "when given a word within a story"] },
            { "text": "Level 2 - Later Elementary", "levels": ["when given a picture", "when given a word", "when given a word within a sentence", "when given a word within a story"] },
            { "text": "Level 3 - Secondary", "levels": ["when given a picture", "when given a word", "when given a word within a sentence", "when given a word within a story"] }
          ]
        },
        {
          "text": "name synonyms",
          "subGoalLevels": [
            { "text": "Level 1 - Early Elementary", "levels": ["when given a picture", "when given a word", "when given a word within a sentence", "when given a word within a story"] },
            { "text": "Level 2 - Later Elementary", "levels": ["when given a picture", "when given a word", "when given a word within a sentence", "when given a word within a story"] },
            { "text": "Level 3 - Secondary", "levels": ["when given a picture", "when given a word", "when given a word within a sentence", "when given a word within a story"] }
          ]
        },
        { "text": "state the meaning of a root word", "levels": ["in isolation", "when given a word", "when given a word within a sentence", "when given a word within a story"] },
        { "text": "state the meaning of a prefix", "levels": ["in isolation", "when given a word", "when given a word within a sentence", "when given a word within a story"] },
        { "text": "state the meaning of a suffix", "levels": ["in isolation", "when given a word", "when given a word within a sentence", "when given a word within a story"] },
        { "text": "state the meaning of an unknown word using word parts", "levels": ["in isolation", "when given a word", "when given a word within a sentence", "when given a word within a story"] }
      ]
    },
    "Fact and Opinion": {
      "goals": [
        { "text": "explain what a fact is", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "explain what an opinion is", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "identify statements as fact or opinion", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "explain why a given statement is a fact/opinion", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "provide one detail to support a fact", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "provide one detail to support an opinion", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "provide two details to support a fact", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "provide two details to support an opinion", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "provide three details to support a fact", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] },
        { "text": "provide three details to support an opinion", "levels": ["related to a picture scene", "related to a sentence", "related to a 2-3 sentence story", "related to a short story", "related to a grade level text", "related to academic instruction"] }
      ]
    },
    "Cause and Effect": {
      "goals": [
        { "text": "Identify the cause when given an effect", "levels": ["when given a picture scene", "when given a sentence", "when given 2-3 sentences", "when given a short story", "when given a grade level text", "during academic instruction"] },
        { "text": "identify the effect when given a cause", "levels": ["when given a picture scene", "when given a sentence", "when given 2-3 sentences", "when given a short story", "when given a grade level text", "during academic instruction"] },
        { "text": "answer cause/effect questions", "levels": ["when given a picture scene", "when given a sentence", "when given 2-3 sentences", "when given a short story", "when given a grade level text", "during academic instruction"] },
        { "text": "answer inferential questions", "levels": ["when given a picture scene", "when given a sentence", "when given 2-3 sentences", "when given a short story", "when given a grade level text", "during academic instruction"] },
        { "text": "provide evidence to support an inference", "levels": ["when given a picture scene", "when given a sentence", "when given 2-3 sentences", "when given a short story", "when given a grade level text", "during academic instruction"] },
        { "text": "make predictions", "levels": ["when given a picture scene", "when given a sentence", "when given 2-3 sentences", "when given a short story", "when given a grade level text", "during academic instruction"] },
        { "text": "provide evidence to support a prediction", "levels": ["when given a picture scene", "when given a sentence", "when given 2-3 sentences", "when given a short story", "when given a grade level text", "during academic instruction"] }
      ]
    },
    "Summarizing": {
      "goals": [
        { "text": "identify important and unimportant details", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "identify the main idea", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "identify 2 details that support a given main idea", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "identify 3 details that support a given main idea", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "identify 4 details that support a given main idea", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "generate a summary (including 2 details)", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "generate a summary (including 3 details)", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "generate a summary (including 4 details)", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] },
        { "text": "generate a summary (including 5 details)", "levels": ["in a picture scene", "in a 3-sentence paragraph", "in a 4-sentence paragraph", "in a 5-sentence paragraph", "in a 6-sentence paragraph", "in a short story", "in a chapter", "in a classroom discussion"] }
      ]
    },
    "Narrative": {
      "goals": [
        { "text": "answer questions about narrative elements (character, setting, events)", "levels": [] },
        { "text": "answer questions about story grammar elements (character, setting, problem, feelings, plan, action, solution)", "levels": [] },
        { "text": "sequence 2 pictures", "levels": [] },
        { "text": "sequence 3 pictures", "levels": [] },
        { "text": "sequence 4 pictures", "levels": [] },
        { "text": "sequence 5 pictures", "levels": [] },
        { "text": "sequence 6 pictures", "levels": [] },
        { "text": "sequence 7 pictures", "levels": [] },
        { "text": "sequence 8 pictures", "levels": [] },
        { "text": "retell a story by providing 2 details (in sequential order)", "levels": [] },
        { "text": "retell a story by providing 3 details (in sequential order)", "levels": [] },
        { "text": "retell a story by providing 4 details (in sequential order)", "levels": [] },
        { "text": "retell a story by providing 5 details (in sequential order)", "levels": [] },
        { "text": "retell a story by providing 6 details (in sequential order)", "levels": [] },
        { "text": "retell a story including narrative elements (character, setting, events)", "levels": [] },
        { "text": "retell a story including story grammar elements (character, setting, problem, feelings, plan, action, solution)", "levels": [] },
        { "text": "generate a narrative including key elements (character, setting, events)", "levels": [] },
        { "text": "generate a narrative including story grammar elements (character, setting, problem, feelings, plan, action, solution)", "levels": [] }
      ]
    },
    "Receptive Language": {
      "goals": [
        { "text": "follow 2-step directions", "levels": ["about a picture scene", "about a sentence", "about 2-3 sentences", "about a short story", "about a grade level text", "during academic instruction"] },
        { "text": "follow 3-step directions", "levels": ["about a picture scene", "about a sentence", "about 2-3 sentences", "about a short story", "about a grade level text", "during academic instruction"] },
        { "text": "answer yes/no questions", "levels": ["about a picture scene", "about a sentence", "about 2-3 sentences", "about a short story", "about a grade level text", "during academic instruction"] },
        { "text": "answer questions (who, what)", "levels": ["about a picture scene", "about a sentence", "about 2-3 sentences", "about a short story", "about a grade level text", "during academic instruction"] },
        { "text": "answer questions (when, where)", "levels": ["about a picture scene", "about a sentence", "about 2-3 sentences", "about a short story", "about a grade level text", "during academic instruction"] },
        { "text": "answer questions (how, why)", "levels": ["about a picture scene", "about a sentence", "about 2-3 sentences", "about a short story", "about a grade level text", "during academic instruction"] },
        { "text": "answer WH questions (who, what, when, where, why)", "levels": ["about a picture scene", "about a sentence", "about 2-3 sentences", "about a short story", "about a grade level text", "during academic instruction"] }
      ]
    },
    "Functional Communication": {
      "goals": [
        { "text": "engage in joint attention", "levels": [] },
        { "text": "choose between two items", "levels": [] },
        { "text": "point to request desired objects", "levels": [] },
        { "text": "use gestures to request desired objects or actions", "levels": [] },
        { "text": "use gestures to protest undesired objects or actions", "levels": [] },
        { "text": "use words to request desired objects or actions", "levels": [] },
        { "text": "use words to protest undesired objects or actions", "levels": [] },
        { "text": "use vocalizations to gain attention", "levels": [] },
        { "text": "use words to gain attention", "levels": [] },
        { "text": "use vocalizations to greet others", "levels": [] },
        { "text": "use words to greet others", "levels": [] },
        { "text": "produce 2-word utterances", "levels": [] },
        { "text": "produce 3-word utterances", "levels": [] },
        { "text": "produce 4-word utterances", "levels": [] }
      ]
    },
    "Grammar": {
      "goals": [
        { "text": "produce 3-word phrases that are grammatically correct", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce 4-word phrases that are grammatically correct", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce 5-word phrases that are grammatically correct", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce action + object (e.g., wash hands) phrases", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce agent + action (e.g., I jump)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce action + modifier (e.g., jump fast)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use prepositions", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use modifiers", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use words to indicate spatial locations (e.g., in, on, over, above)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use words to indicated spatial relationships (e.g., with, next to, between, among)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use adjectives to modify nouns based on color, size, amount, shape, and temperature", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use adverbs to modify verbs based on distance and time (e.g., far, sometimes, early, never, short, always, immediately)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use regular plural nouns", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use irregular plural nouns", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use subject pronouns (he, she, they)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use possessive pronouns (my, her, his)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use helping verbs (is, are, am)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use modal and auxiliary verbs (e.g., could, would, may, might)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use past tense verbs", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "use irregular past tense verbs", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce grammatically correct sentences", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce compound sentences using conjunctions (e.g., and, but, so)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "produce complex sentences using conjunctions (e.g., before, because)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "point to a picture that represents a given auxiliary verb (\"is\" or \"are\" + verbing)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "point to a picture that represents a given pronoun", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "point to a picture that represents a given possessive noun (e.g., girl's)", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "point to a picture the represents a given comparative (adjective + \"er\")", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] },
        { "text": "point to a picture the represents a given superlative (adjective + \"est\")", "levels": ["in fill-in sentences", "in phrases", "in sentences", "in structured activities", "in spontaneous speech", "in a field of 2 choices", "Independently"] }
      ]
    }
  },
  "frequencyOfCues": ["Independently: 0% cues", "Rarely: 1-25%", "Sometimes: 25-50%", "Frequently: 50-75%", "Extensively: 75-100%"],
  "cuesUsed": ["Simultaneous production", "Imitation", "Delayed imitation", "gestural cues", "tactile cues", "visual cues", "verbal cues", "Phonemic cues", "Semantic cues", "Modelling", "Explicit teaching", "Recasting", "Metacognitive cue", "Cue to correct error", "Structured practice"]
};

function App() {
  const [selectedGoalArea, setSelectedGoalArea] = useState('');
  const [selectedSpecificGoal, setSelectedSpecificGoal] = useState('');
  const [selectedSubGoalLevel, setSelectedSubGoalLevel] = useState(''); // For goals with sub-levels like grades/basic
  const [selectedGoalLevel, setSelectedGoalLevel] = useState('');
  const [selectedAccuracyType, setSelectedAccuracyType] = useState('');
  const [accuracyValue, setAccuracyValue] = useState('');
  const [selectedFrequencyOfCues, setSelectedFrequencyOfCues] = useState('');
  const [selectedCuesUsed, setSelectedCuesUsed] = useState([]); // Changed to array for multiple selections
  const [generatedGoal, setGeneratedGoal] = useState('');
  const [aiRefinedGoal, setAiRefinedGoal] = useState('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  // Options for dropdowns
  const goalAreas = Object.keys(goalInventoryData.targetAreas);
  const specificGoals = selectedGoalArea ? goalInventoryData.targetAreas[selectedGoalArea].goals : [];

  // Determine available sub-goal levels or direct levels
  const currentGoal = specificGoals.find(goal => goal.text === selectedSpecificGoal);
  const subGoalLevels = currentGoal && currentGoal.subGoalLevels ? currentGoal.subGoalLevels : [];
  const directGoalLevels = currentGoal && currentGoal.levels ? currentGoal.levels : [];

  // Effect to reset dependent dropdowns when a higher-level selection changes
  useEffect(() => {
    setSelectedSpecificGoal('');
    setSelectedSubGoalLevel('');
    setSelectedGoalLevel('');
    setAccuracyValue('');
    setSelectedAccuracyType('');
    setSelectedCuesUsed([]);
    setGeneratedGoal('');
    setAiRefinedGoal(''); // Reset AI goal
  }, [selectedGoalArea]);

  useEffect(() => {
    setSelectedSubGoalLevel('');
    setSelectedGoalLevel('');
    setAccuracyValue('');
    setSelectedAccuracyType('');
    setSelectedCuesUsed([]);
    setGeneratedGoal('');
    setAiRefinedGoal(''); // Reset AI goal
  }, [selectedSpecificGoal]);

  useEffect(() => {
    setSelectedGoalLevel('');
    setAccuracyValue('');
    setSelectedAccuracyType('');
    setSelectedCuesUsed([]);
    setGeneratedGoal('');
    setAiRefinedGoal(''); // Reset AI goal
  }, [selectedSubGoalLevel]);

  // Handle multiple cue selection
  const handleCueChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCuesUsed(prev => [...prev, value]);
    } else {
      setSelectedCuesUsed(prev => prev.filter(cue => cue !== value));
    }
  };

  useEffect(() => {
    // Generate the goal whenever all selections are made
    if (selectedGoalArea && selectedSpecificGoal && selectedFrequencyOfCues && selectedCuesUsed.length > 0 && selectedAccuracyType && accuracyValue) {
      let goalText = selectedSpecificGoal;
      if (selectedSubGoalLevel) {
        goalText += ` (${selectedSubGoalLevel})`;
      }
      if (selectedGoalLevel) {
        goalText += ` ${selectedGoalLevel}`;
      }

      let accuracyString = '';
      if (selectedAccuracyType === 'Percentage') {
        accuracyString = `${accuracyValue}%`;
      } else if (selectedAccuracyType === 'Occurrence') {
        accuracyString = `${accuracyValue} occurrences`;
      } else if (selectedAccuracyType === 'Ratio') {
        accuracyString = `${accuracyValue} ratio`;
      } else { // Text
        accuracyString = accuracyValue;
      }

      const cuesString = selectedCuesUsed.join(', '); // Join multiple cues with comma

      const fullGoal = `Client will ${goalText} with ${accuracyString} accuracy with the aid of the following cues {${cuesString}} which were given ${selectedFrequencyOfCues.toLowerCase()}.`;
      setGeneratedGoal(fullGoal);
    } else {
      setGeneratedGoal('');
      setAiRefinedGoal(''); // Clear AI goal if primary goal is incomplete
    }
  }, [selectedGoalArea, selectedSpecificGoal, selectedSubGoalLevel, selectedGoalLevel, selectedAccuracyType, accuracyValue, selectedFrequencyOfCues, selectedCuesUsed]);

  const handleCopyGoal = async (textToCopy) => {
    if (textToCopy) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setShowCopiedMessage(true);
        setTimeout(() => setShowCopiedMessage(false), 2000);
      } catch (err) {
        // fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setShowCopiedMessage(true);
        setTimeout(() => setShowCopiedMessage(false), 2000);
      }
    }
  };

  const refineGoalWithAI = async () => {
    if (!generatedGoal) {
      console.log("Please generate a base goal first.");
      return;
    }

    setIsLoadingAI(true);
    setAiRefinedGoal(''); // Clear previous AI goal

    try {
      const prompt = `Refine the following speech and language therapy goal to be more SMART (Specific, Measurable, Achievable, Relevant, Time-bound). Focus on adding measurable criteria and a potential timeframe. Ensure the output is *only* the refined goal sentence, without any introductory phrases or explanations.
      Current Goal: "${generatedGoal}"
      Refined Goal:`;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text.trim();
        setAiRefinedGoal(text);
      } else {
        setAiRefinedGoal("Could not refine the goal. Please try again or adjust your selections.");
        console.error("Gemini API response structure unexpected:", result);
      }
    } catch (error) {
      setAiRefinedGoal("Error refining goal with AI. Please check your network connection or try again later.");
      console.error("Error calling Gemini API:", error);
    } finally {
      setIsLoadingAI(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 font-inter antialiased">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8">
          <span role="img" aria-label="Speech Bubble" className="mr-2">🗣️</span>
          SLT Goal Setting Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Goal Area Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="goalArea" className="text-lg font-semibold text-gray-700 mb-2">Goal Area:</label>
            <select
              id="goalArea"
              className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
              value={selectedGoalArea}
              onChange={(e) => setSelectedGoalArea(e.target.value)}
            >
              <option value="">Select a Goal Area</option>
              {goalAreas.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          {/* Specific Goal Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="specificGoal" className="text-lg font-semibold text-gray-700 mb-2">Specific Goal:</label>
            <select
              id="specificGoal"
              className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
              value={selectedSpecificGoal}
              onChange={(e) => setSelectedSpecificGoal(e.target.value)}
              disabled={!selectedGoalArea}
            >
              <option value="">Select a Specific Goal</option>
              {specificGoals.map((goal) => (
                <option key={goal.text} value={goal.text}>{goal.text}</option>
              ))}
            </select>
          </div>

          {/* Sub-Goal Level Dropdown (Conditional) */}
          {subGoalLevels.length > 0 && (
            <div className="flex flex-col">
              <label htmlFor="subGoalLevel" className="text-lg font-semibold text-gray-700 mb-2">Sub-Goal Level:</label>
              <select
                id="subGoalLevel"
                className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
                value={selectedSubGoalLevel}
                onChange={(e) => setSelectedSubGoalLevel(e.target.value)}
                disabled={!selectedSpecificGoal}
              >
                <option value="">Select Sub-Level</option>
                {subGoalLevels.map((subLevel) => (
                  <option key={subLevel.text} value={subLevel.text}>{subLevel.text}</option>
                ))}
              </select>
            </div>
          )}

          {/* Goal Level Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="goalLevel" className="text-lg font-semibold text-gray-700 mb-2">Goal Level:</label>
            <select
              id="goalLevel"
              className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
              value={selectedGoalLevel}
              onChange={(e) => setSelectedGoalLevel(e.target.value)}
              disabled={!selectedSpecificGoal || (subGoalLevels.length > 0 && !selectedSubGoalLevel)}
            >
              <option value="">Select Goal Level</option>
              {
                (subGoalLevels.length > 0 && selectedSubGoalLevel)
                  ? subGoalLevels.find(sl => sl.text === selectedSubGoalLevel)?.levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))
                  : directGoalLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))
              }
            </select>
          </div>

          {/* Accuracy Type Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="accuracyType" className="text-lg font-semibold text-gray-700 mb-2">Accuracy Type:</label>
            <select
              id="accuracyType"
              className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
              value={selectedAccuracyType}
              onChange={(e) => {
                setSelectedAccuracyType(e.target.value);
                setAccuracyValue(''); // Reset accuracy value when type changes
              }}
            >
              <option value="">Select Accuracy Type</option>
              <option value="Percentage">Percentage</option>
              <option value="Occurrence">Occurrence</option>
              <option value="Ratio">Ratio</option>
              <option value="Text">Text (Achieved/Not Achieved)</option>
            </select>
          </div>

          {/* Accuracy Value Input (Conditional) */}
          {selectedAccuracyType && (
            <div className="flex flex-col">
              <label htmlFor="accuracyValue" className="text-lg font-semibold text-gray-700 mb-2">Accuracy Value:</label>
              {selectedAccuracyType === 'Text' ? (
                <select
                  id="accuracyValue"
                  className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
                  value={accuracyValue}
                  onChange={(e) => setAccuracyValue(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="achieved">Achieved</option>
                  <option value="not achieved">Not Achieved</option>
                </select>
              ) : (
                <input
                  type="number"
                  id="accuracyValue"
                  className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
                  placeholder={`Enter ${selectedAccuracyType.toLowerCase()}`}
                  value={accuracyValue}
                  onChange={(e) => setAccuracyValue(e.target.value)}
                />
              )}
            </div>
          )}

          {/* Frequency of Cues Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="frequencyOfCues" className="text-lg font-semibold text-gray-700 mb-2">Frequency of Cues:</label>
            <select
              id="frequencyOfCues"
              className="p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out bg-white text-gray-800"
              value={selectedFrequencyOfCues}
              onChange={(e) => setSelectedFrequencyOfCues(e.target.value)}
            >
              <option value="">Select Frequency</option>
              {goalInventoryData.frequencyOfCues.map((freq) => (
                <option key={freq} value={freq}>{freq}</option>
              ))}
            </select>
          </div>

          {/* Cues Used Checkboxes (Multi-select) */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-lg font-semibold text-gray-700 mb-2">Cues Used:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 border border-blue-300 rounded-lg shadow-sm bg-white">
              {goalInventoryData.cuesUsed.map((cue) => (
                <label key={cue} className="inline-flex items-center text-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    value={cue}
                    checked={selectedCuesUsed.includes(cue)}
                    onChange={handleCueChange}
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-base">{cue}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Goal Display */}
        <div className="mt-8 bg-blue-50 border border-blue-300 rounded-lg p-6 shadow-inner">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Generated Goal:</h2>
          <div className="relative">
            <textarea
              readOnly
              value={generatedGoal}
               className="w-full p-4 text-gray-800 bg-white border border-blue-200 rounded-lg text-lg sm:text-xl font-medium resize-none h-48 focus:outline-none pt-16" // h-48 for more height
  placeholder="Your SMART goal will appear here once all selections are made."
/>
            {generatedGoal && (
              <button
                onClick={() => handleCopyGoal(generatedGoal)}
                className="absolute top-0 right-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" // Changed top-2 to top-0
              >
                Copy Goal
              </button>
            )}
            {showCopiedMessage && (
              <div className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-3 py-1 rounded-md shadow-lg animate-fade-in-out">
                Copied!
              </div>
            )}
          </div>

          {/* AI Refinement Section */}
          <div className="mt-6 flex flex-col items-center">
            <button
              onClick={refineGoalWithAI}
              disabled={!generatedGoal || isLoadingAI}
              className={`py-3 px-6 rounded-full font-bold text-lg shadow-lg transition duration-300 ease-in-out transform
                ${!generatedGoal || isLoadingAI
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                }`}
            >
              {isLoadingAI ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Refining...
                </span>
              ) : (
                'Refine Goal with AI ✨'
              )}
            </button>

            {aiRefinedGoal && (
              <div className="mt-6 w-full relative">
                <h3 className="text-xl font-bold text-purple-700 mb-2">AI-Refined Goal:</h3>
                <textarea
                  readOnly
                  value={aiRefinedGoal}
                  className="w-full p-4 text-gray-800 bg-white border border-purple-300 rounded-lg text-lg sm:text-xl font-medium resize-none h-32 focus:outline-none pt-16" // Added pt-16 for top padding
                  placeholder="AI-refined goal will appear here."
                />
                <button
                  onClick={() => handleCopyGoal(aiRefinedGoal)}
                  className="absolute top-0 right-2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" // Changed top-2 to top-0
                >
                  Copy AI Goal
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
