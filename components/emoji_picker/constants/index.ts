// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {EmojiCategory} from 'mattermost-redux/types/emojis';

import * as Emoji from 'utils/emoji.jsx';

import {Category, Categories} from '../types';

export const RECENT = 'recent';
export const SEARCH_RESULTS = 'searchResults';
export const SMILEY_EMOTION = 'smileys-emotion';
export const CUSTOM = 'custom';

const categoryClass: Map<EmojiCategory, string> = new Map([
    [RECENT, 'icon-clock-outline'],
    [SMILEY_EMOTION, 'icon-emoticon-happy-outline'],
    ['people-body', 'icon-account-outline'],
    ['animals-nature', 'icon-leaf-outline'],
    ['food-drink', 'icon-food-apple'],
    ['activities', 'icon-basketball'],
    ['travel-places', 'icon-airplane-variant'],
    ['objects', 'icon-lightbulb-outline'],
    ['symbols', 'icon-heart-outline'],
    ['flags', 'icon-flag-outline'],
    [CUSTOM, 'icon-emoticon-custom-outline'],
    [SEARCH_RESULTS, ''],
]);

function createCategory(name: EmojiCategory): Category {
    return {
        name,
        id: Emoji.CategoryTranslations.get(name),
        className: categoryClass.get(name) || '',
        message: Emoji.CategoryMessage.get(name),
    };
}

export const RECENT_EMOJI_CATEGORY: Pick<Categories, 'recent'> = {recent: createCategory(RECENT)};
export const SEARCH_EMOJI_CATEGORY: Pick<Categories, typeof SEARCH_RESULTS> = {searchResults: createCategory(SEARCH_RESULTS)};

export const CATEGORIES: Categories = Emoji.CategoryNames.
    filter((category) => !(category === 'recent' || category === 'searchResults')).
    reduce((previousCategory, currentCategory) => {
        return {
            ...previousCategory,
            [currentCategory]: createCategory(currentCategory as EmojiCategory),
        };
    }, {} as Categories);

export const EMOJI_PER_ROW = 9; // needs to match variable `$emoji-per-row` in _variables.scss
export const ITEM_HEIGHT = 36; //as per .emoji-picker__item height in _emoticons.scss
export const EMOJI_CONTAINER_HEIGHT = 290; // If this changes, the spaceRequiredAbove and spaceRequiredBelow props passed to the EmojiPickerOverlay must be updated

export const NAVIGATE_TO_NEXT_EMOJI = 'next-emoji';
export const NAVIGATE_TO_PREVIOUS_EMOJI = 'previous-emoji';
export const NAVIGATE_TO_NEXT_EMOJI_ROW = 'next-emoji-row';
export const NAVIGATE_TO_PREVIOUS_EMOJI_ROW = 'previous-emoji-row';

export const CATEGORY_HEADER_ROW = 'categoryHeaderRow';
export const EMOJIS_ROW = 'emojisRow';

export const EMOJI_LAZY_LOAD_SCROLL_DEBOUNCE = 150;
export const EMOJI_ROWS_OVERSCAN_COUNT = 1;

