/**
 *
 */
package com.training.core.cronjob;

import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.stocknotificationservices.cronjob.AbstractStockLevelStatusJob;
import de.hybris.platform.stocknotificationservices.cronjob.StockNotificationTask;

import java.util.Map;

import org.apache.log4j.Logger;


/**
 * Developer : Bhavik Solanki
 *
 */
public class CustomStockLevelStatusNotificationJob extends AbstractStockLevelStatusJob
{
	private static final Logger LOG = Logger.getLogger(CustomStockLevelStatusNotificationJob.class);
	@Override
	protected StockNotificationTask createTask(final Map<String, ItemModel> data)
	{
		LOG.info("Triggering CustomStockLevelStatusNotificationJob to Notify Customer for Back in Stock Products");
		return new StockNotificationTask(getNotificationService(), modelService, data);
	}

}
