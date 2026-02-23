/**
 * @module @minions-content-publishing/sdk/schemas
 * Custom MinionType schemas for Minions Content-publishing.
 */

import type { MinionType } from 'minions-sdk';

export const publishjobType: MinionType = {
  id: 'content-publishing-publish-job',
  name: 'Publish job',
  slug: 'publish-job',
  description: 'A job to publish content to a social platform.',
  icon: '📤',
  schema: [
    { name: 'assetBundleId', type: 'string', label: 'assetBundleId' },
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'scheduledAt', type: 'string', label: 'scheduledAt' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'approvalRequestId', type: 'string', label: 'approvalRequestId' },
    { name: 'priority', type: 'select', label: 'priority' },
  ],
};

export const deliveryreceiptType: MinionType = {
  id: 'content-publishing-delivery-receipt',
  name: 'Delivery receipt',
  slug: 'delivery-receipt',
  description: 'Confirmation that content was posted to a platform.',
  icon: '✅',
  schema: [
    { name: 'publishJobId', type: 'string', label: 'publishJobId' },
    { name: 'accountId', type: 'string', label: 'accountId' },
    { name: 'publishedAt', type: 'string', label: 'publishedAt' },
    { name: 'platformPostId', type: 'string', label: 'platformPostId' },
    { name: 'platformUrl', type: 'string', label: 'platformUrl' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const engagementsnapshotType: MinionType = {
  id: 'content-publishing-engagement-snapshot',
  name: 'Engagement snapshot',
  slug: 'engagement-snapshot',
  description: 'Post-publish engagement metrics.',
  icon: '📊',
  schema: [
    { name: 'deliveryReceiptId', type: 'string', label: 'deliveryReceiptId' },
    { name: 'likes', type: 'number', label: 'likes' },
    { name: 'comments', type: 'number', label: 'comments' },
    { name: 'shares', type: 'number', label: 'shares' },
    { name: 'views', type: 'number', label: 'views' },
    { name: 'capturedAt', type: 'string', label: 'capturedAt' },
  ],
};

export const customTypes: MinionType[] = [
  publishjobType,
  deliveryreceiptType,
  engagementsnapshotType,
];

