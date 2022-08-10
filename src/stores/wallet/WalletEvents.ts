import { createEvent } from 'effector';

export const connectWallet = createEvent<string>('connectWallet')

export const disconnectWallet = createEvent('disconnectWallet')