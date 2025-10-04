const MINECRAFT_ITEMS_GROUPS = {

    "construction": [
        "stone", "grass_block", "dirt", "cobblestone", "oak_planks", "spruce_planks", "eucalyptus_planks", "jungle_planks", "bedrock",
        "sand", "gravel", "gold_ore", "iron_ore", "coal_ore", "oak_log", "spruce_log", "eucalyptus_log", "jungle_log",
        "sponge", "glass", "lapis_ore", "lapis_block", "sandstone", "chiseled_sandstone", "smooth_sandstone", "white_wool", "orange_wool",
        "magenta_wool", "light_blue_wool", "yellow_wool", "lime_wool", "pink_wool", "gray_wool", "light_gray_wool", "cyan_wool", "purple_wool",
        "blue_wool", "brown_wool", "green_wool", "red_wool", "black_wool", "gold_block", "iron_block", "stone_slab", "sandstone_slab",
        "cobblestone_slab", "brick_slab", "stone_brick_slab", "nether_brick_slab", "quartz_slab", "brick_block", "bookshelf", "mossy_cobblestone", "obsidian",
        "oak_stairs", "diamond_ore", "diamond_block", "stone_stairs", "redstone_ore",  "ice", "snow_block", "clay_block","pumpkin",
        "netherrack", "soulsand", "glowstone", "halloween_pumpkin", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick", "melon_block",
        "brick_stairs", "stone_brick_stairs", "mycelium", "nether_bricks", "nether_brick_stairs", "end_stone", "oak_slab", "spruce_slab", "eucalyptus_slab",
        "jungle_slab", "sandstone_stairs", "emerald_ore", "emerald_block", "spruce_stairs", "eucalyptus_stairs", "jungle_stairs", "cobblestone_wall", "mossy_cobblestone_wall",
        "quartz_ore", "quartz_block", "chiseled_quartz_block", "quartz_pilar", "quartz_stairs"
    ],


    "decorative": [
        "oak_sapling", "spruce_sapling", "eucalyptus_sapling", "jungle_sapling", "oak_leaves", "spruce_leaves", "eucalyptus_leaves", "jungle_leaves", "web",
        "grass", "fern", "dead_bush", "flower", "rose", "brown_mushroom", "red_mushroom", "torch", "chest",
        "crafting_table", "furnace", "stairs", "snow", "cactus", "jukebox", "fence", "infestes_stone", "infestes_cobblestone",
        "infestes_stone_brick", "iron_bars", "glass_plate", "vine", "lily_pad", "nether_fence", "enchant_table", "end_portal_frame", "ender_chest",
        "anvil", "chipped_anvil", "damaged_anvil", "trapped_chest", "painting", "sign", "bed", "item_frame", "flower_pot",
        "skeleton_head", "whiter_skeleton_head", "zombie_head", "steve_head", "creeper_head"
    ],


    "redstone": [
        "ejector", "note_block", "sticky_piston", "piston", "tnt", "lever", "stone_pressure_plate", "oak_pressure_plate", "redstone_torch",
        "stone_button", "trapdoor", "fence_gate", "redstone_lamp", "tripwire_hook", "oak_button", "light_weighted_pressure_plate", "heavy_weighted_pressure_plate", "daylight_detector",
        "redstone_block", "hopper", "dropper", "door", "iron_door", "redstone", "repeater", "comparator"
    ],


    "transport": [
        "powered_rail", "detector_rail", "rail", "activator_rail", "minecart", "saddle", "boat", "chest_minecart", "furnace_minecart",
        "carrot_on_a_stick", "tnt_minecart", "furnace_minecart"
    ],


    "miscellany": [
        "beacom", "bucket", "water_bucket", "lava_bucket", "snow_ball", "milk_bucket", "paper", "book", "slime_ball",
        "bone", "ender_pearl", "ender_eye", "creeper_spawn_egg", "skeleton_spawn_egg", "spider_spawn_egg", "zombie_pigman_spawn_egg", "slime_spawn_egg", "ghast_spawn_egg",
        "zombie_pigman_spawn_egg", "enderman_spawn_egg", "cave_spider_spawn_egg", "silverfish_egg", "blaze_egg", "magma_cube_egg", "bat_egg", "witch_egg", "pig_egg",
        "sheep_egg", "cow_egg", "chicken_egg", "squid_egg", "wolf_egg", "mushroom_egg", "ocelot_egg", "villager_egg", "experience_bottle",
        "fire_ball", "feather_and_book", "map", "firework_star", "music_disc_13", "music_disc_cat", "music_disc_blocks", "music_disc_chirp", "music_disc_far",
        "music_disc_mall", "music_disc_mellohi", "music_disc_stal", "music_disc_strad", "music_disc_ward", "music_disc_11", "music_disc_wait"
    ],


    "all": [
        "stone", "grass_block", "dirt", "cobblestone", "oak_planks", "spruce_planks", "eucalyptus_planks", "jungle_planks", "oak_sapling",
        "spruce_sapling", "eucalyptus_sapling", "jungle_sapling", "bedrock", "sand", "gravel", "gold_ore", "iron_ore", "coal_ore", 
        "oak_log", "spruce_log", "eucalyptus_log", "jungle_log", "oak_leaves", "spruce_leaves", "eucalyptus_leaves", "jungle_leaves", "sponge", 
        "glass", "lapis_ore", "lapis_block", "ejector", "sandstone", "chiseled_sandstone", "smooth_sandstone", "note_block", "powered_rail", 
        "detector_rail", "sticky_piston", "web", "grass", "fern", "dead_bush", "piston", "white_wool", "orange_wool", 
        "magenta_wool", "light_blue_wool", "yellow_wool", "lime_wool", "pink_wool", "gray_wool", "light_gray_wool", "cyan_wool", "purple_wool", 
        "blue_wool", "brown_wool", "green_wool", "red_wool", "black_wool", "flower", "rose", "brown_mushroom", "red_mushroom", 
        "gold_block", "iron_block", "stone_slab", "sandstone_slab", "cobblestone_slab", "brick_slab", "stone_brick_slab", "nether_brick_slab", "quartz_slab", 
        "brick_block", "tnt", "bookshelf", "mossy_cobblestone", "obsidian", "torch", "oak_stairs", "chest", "diamond_ore", 
        "diamond_block", "crafting_table", "furnace", "stairs", "rail", "stone_stairs", "lever", "stone_pressure_plate", "oak_pressure_plate", 
        "redstone_ore", "redstone_torch", "stone_button", "snow", "ice", "snow_block", "cactus", "clay_block", "jukebox", 
        "fence", "pumpkin", "netherrack", "soulsand", "glowstone", "halloween_pumpkin", "trapdoor", "infestes_stone", "infestes_cobblestone", 
        "infestes_stone_brick", "stone_brick", "mossy_stone_brick", "cracked_stone_brick", "chiseled_stone_brick", "iron_bars", "glass_plate", "melon_block", "vine", 
        "fence_gate", "brick_stairs", "stone_brick_stairs", "mycelium", "lily_pad", "nether_bricks", "nether_fence", "nether_brick_stairs", "enchant_table",
        "end_portal_frame", "end_stone", "redstone_lamp", "oak_slab", "spruce_slab", "eucalyptus_slab", "jungle_slab", "sandstone_stairs", "emerald_ore", 
        "ender_chest", "tripwire_hook", "emerald_block", "spruce_stairs", "eucalyptus_stairs", "jungle_stairs", "beacom", "cobblestone_wall", "mossy_cobblestone_wall", 
        "oak_button", "anvil", "chipped_anvil", "damaged_anvil", "trapped_chest", "light_weighted_pressure_plate", "heavy_weighted_pressure_plate", "daylight_detector", "redstone_block", 
        "quartz_ore", "hopper", "quartz_block", "chiseled_quartz_block", "quartz_pilar", "quartz_stairs", "activator_rail", "dropper", "iron_shovel", 
        "iron_picaxe", "iron_axe", "flint_and_steel", "apple", "bow", "arrow", "coal", "charcoal", "diamond", 
        "iron_ingot", "gold_ingot", "iron_sword", "wooden_sword", "wooden_shovel", "wooden_picaxe", "wooden_axe", "stone_sword", "stone_shovel", 
        "stone_picaxe", "stone_axe", "diamond_sword", "diamond_shovel", "diamond_picaxe", "diamond_axe", "stick", "bowl", "mushroom_stew", 
        "golden_sword", "golden_shovel", "golden_picaxe", "golden_axe", "line", "feather", "gun_powder", "wooden_hoe", "stone_hoe", 
        "iron_hoe", "diamond_hoe", "golden_hoe", "seed", "wheat", "bread", "leather_helmet", "leather_chestplate", "leather_leggings", 
        "leather_boots", "chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings", "iron_boots", 
        "diamond_helmet", "diamond_chestplate", "diamond_leggings", "diamond_boots", "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots", "flint", 
        "porkchop", "cooked_porkchop", "painting", "golden_apple", "enchanted_golden_apple", "sign", "door", "bucket", "water_bucket", 
        "lava_bucket", "minecart", "saddle", "iron_door", "redstone", "snow_ball", "boat", "leather", "milk_bucket",
        "brick", "clay", "sugar_cane", "paper", "book", "slime_ball", "chest_minecart", "furnace_minecart", "egg", 
        "compass", "fishing_rod", "clock", "glowstone_dust", "fish", "cooked_fish", "ink_sac", "red_dye", "green_dye", 
        "cacau_seed", "lapis_lazuli", "purple_dye", "cyan_dye", "light_gray_dye", "gray_dye", "pink_dye", "lime_dye", "yellow_dye", 
        "light_blue_dye", "magenta_dye", "orange_dye", "bone_meal", "bone", "sugar", "cake", "bed", "repeater", 
        "cookie", "shears", "melon_slice", "pumpkin_seed", "melon_seed", "beef", "cooked_beef", "chicken", "cooked_chicken", 
        "rotten_flesh", "ender_pearl", "blaze_rod", "ghast_tear", "gold_nugget", "nether_wart", "water_bottle", "potion_regeneration045_1", "potion_regeneration022_2",
        "potion_regeneration200_1", "trowable_potion_regeneration033_1", "trowable_potion_regeneration016_2", "trowable_potion_regeneration130_1", "potion_agility300_1", "potion_agility130_2", "potion_agility800_1", "trowable_potion_agility215_1", "trowable_potion_agility107_2",
        "trowable_potion_agility600_1", "potion_fire_resistance300_1", "potion_fire_resistance800_1", "trowable_potion_fire_resistance215_1", "trowable_potion_fire_resistance600_1", "potion_posion_045_1", "potion_posion_022_2", "potion_posion_200_1", "trowable_potion_posion_033_1", 
        "trowable_potion_posion_016_2", "trowable_potion_posion_130_1", "potion_health_1", "potion_health_2", "trowable_potion_health_1", "trowable_potion_health_2", "potion_nightvision_300", "potion_nightvision_800", "trowable_potion_nightvision_215", 
        "trowable_potion_nightvision_600", "potion_weakness_130", "potion_weakness_400", "trowable_potion_weakness_107", "trowable_potion_weakness_300", "potion_strength_300_1", "potion_strength_130_2", "potion_strength_130_1", "trowable_potion_strength_215_1", 
        "trowable_potion_strength_107_2", "trowable_potion_strength_600_1", "potion_slowness_130", "potion_slowness_400", "trowable_potion_slowness_107", "trowable_potion_slowness_300", "potion_harming_1", "potion_harming_2", "trowable_potion_harming_1", 
        "trowable_potion_harming_2", "potion_invisibility_300", "potion_invisibility_800", "trowable_potion_invisibility_215", "trowable_potion_invisibility_600", "bottle", "spider_eye", "fermented_spider_eye", "balze_powder", 
        "magma_cream", "brewing_stand", "cauldron", "ender_eye", "glowing_melon", "creeper_spawn_egg", "skeleton_spawn_egg", "spider_spawn_egg", "zombie_spawn_egg", 
        "slime_spawn_egg", "ghast_spawn_egg", "zombie_pigman_spawn_egg", "enderman_spawn_egg", "cave_spider_spawn_egg", "silverfish_egg", "blaze_egg", "magma_cube_egg", "bat_egg",
        "witch_egg", "pig_egg", "sheep_egg", "cow_egg", "chicken_egg", "squid_egg", "wolf_egg", "mushroom_egg", "ocelot_egg", 
        "villager_egg", "experience_bottle", "fire_ball", "feather_and_book", "emerald", "item_frame", "flower_pot", "carrot", "potato", 
        "cooked_potato", "poisonous_potato", "map", "golden_carrot", "skeleton_head", "whiter_skeleton_head", "zombie_head", "steve_head", "creeper_head", 
        "carrot_on_a_stick", "nether_star", "pumpkin_pie", "firework_star", "comparator", "nether_brick", "quartz", "tnt_minecart", "hopper_minecart", 
        "music_disc_13", "music_disc_cat", "music_disc_blocks", "music_disc_chirp", "music_disc_far", "music_disc_mall", "music_disc_mellohi", "music_disc_stal", "music_disc_strad", 
        "music_disc_ward", "music_disc_11", "music_disc_wait", "enchanted_book_protection_1", "enchanted_book_protection_2", "enchanted_book_protection_3", "enchanted_book_protection_4", "enchanted_book_fire_protection_1", "enchanted_book_fire_protection_2", 
        "enchanted_book_fire_protection_3", "enchanted_book_fire_protection_4", "enchanted_book_feather_falling_1", "enchanted_book_feather_falling_2", "enchanted_book_feather_falling_3", "enchanted_book_feather_falling_4", "enchanted_book_blast_protection_1", "enchanted_book_blast_protection_2", "enchanted_book_blast_protection_3", 
        "enchanted_book_blast_protection_4", "enchanted_book_projectile_protection_1", "enchanted_book_projectile_protection_2", "enchanted_book_projectile_protection_3", "enchanted_book_projectile_protection_4", "enchanted_book_respiration_1", "enchanted_book_respiration_2", "enchanted_book_respiration_3", "enchanted_book_aqua_affinity_1", 
        "enchanted_book_thorns_1", "enchanted_book_thorns_2", "enchanted_book_thorns_3", "enchanted_book_sharpness_1", "enchanted_book_sharpness_2", "enchanted_book_sharpness_3", "enchanted_book_sharpness_4", "enchanted_book_sharpness_5", "enchanted_book_smite_1", 
        "enchanted_book_smite_2", "enchanted_book_smite_3", "enchanted_book_smite_4", "enchanted_book_smite_5", "enchanted_book_bane_of_arthropods_1", "enchanted_book_bane_of_arthropods_2", "enchanted_book_bane_of_arthropods_3", "enchanted_book_bane_of_arthropods_4", "enchanted_book_bane_of_arthropods_5", 
        "enchanted_book_knockback_1", "enchanted_book_knockback_2", "enchanted_book_fire_aspect_1", "enchanted_book_fire_aspect_2", "enchanted_book_looting_1", "enchanted_book_looting_2", "enchanted_book_looting_3", "enchanted_book_efficiency_1", "enchanted_book_efficiency_2", 
        "enchanted_book_efficiency_3", "enchanted_book_efficiency_4", "enchanted_book_efficiency_5", "enchanted_book_silk_touch_1", "enchanted_book_unbreakable_1", "enchanted_book_unbreakable_2", "enchanted_book_unbreakable_3", "enchanted_book_fortune_1", "enchanted_book_fortune_2", 
        "enchanted_book_fortune_3", "enchanted_book_power_1", "enchanted_book_power_2", "enchanted_book_power_3", "enchanted_book_power_4", "enchanted_book_power_5", "enchanted_book_punch_1", "enchanted_book_punch_2", "enchanted_book_flame_1", "enchanted_book_infinity_1"
    ],


    "food": [
        "apple", "mushroom_stew", "bread", "porkchop", "cooked_porkchop", "golden_apple", "enchanted_golden_apple", "fish", "cooked_fish",
        "cake", "cookie", "melon_slice", "beef", "cooked_beef", "chicken", "cooked_chicken", "rotten_flesh", "spider_eye",
        "carrot", "potato", "cooked_potato", "poisonous_potato", "golden_carrot", "pumpkin_pie"
    ],
    

    "tool": [
        "iron_shovel", "iron_picaxe", "iron_axe", "flint_and_steel", "wooden_shovel", "wooden_picaxe", "wooden_axe", "stone_shovel", "stone_picaxe",
        "stone_axe", "diamond_shovel", "diamond_picaxe", "diamond_axe", "golden_shovel", "golden_picaxe", "golden_axe", "wooden_hoe", "stone_hoe",
        "iron_hoe", "diamond_hoe", "golden_hoe", "compass", "fishing_rod", "clock", "shears", "enchanted_book_efficiency_5", "enchanted_book_silk_touch_1",
        "enchanted_book_unbreakable_3", "enchanted_book_fortune_3"
    ],
    

    "combat": [
        "bow", "arrow", "iron_sword", "wooden_sword", "stone_sword", "diamond_sword", "golden_sword", "leather_helmet", "leather_chestplate",
        "leather_leggings", "leather_boots", "chainmail_helmet", "chainmail_chestplate", "chainmail_leggings", "chainmail_boots", "iron_helmet", "iron_chestplate", "iron_leggings",
        "iron_boots", "diamond_helmet", "diamond_chestplate", "diamond_leggings", "diamond_boots", "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots",
        "enchanted_book_protection_4", "enchanted_book_fire_protection_4", "enchanted_book_feather_falling_4", "enchanted_book_blast_protection_4", "enchanted_book_projectile_protection_4", "enchanted_book_respiration_3", "enchanted_book_aqua_affinity_1", "enchanted_book_thorns_3", "enchanted_book_sharpness_5",
        "enchanted_book_smite_5", "enchanted_book_bane_of_arthropods_5", "enchanted_book_knockback_2", "enchanted_book_fire_aspect_2", "enchanted_book_looting_3", "enchanted_book_power_5", "enchanted_book_punch_2", "enchanted_book_flame_1", "enchanted_book_infinity_1"
    ],
    

    "potions": [
        "ghast_tear", "water_bottle", "potion_regeneration045_1", "potion_regeneration022_2", "potion_regeneration200_1", "trowable_potion_regeneration033_1", "trowable_potion_regeneration016_2", "trowable_potion_regeneration130_1", "potion_agility300_1",
        "potion_agility130_2", "potion_agility800_1", "trowable_potion_agility215_1", "trowable_potion_agility107_2", "trowable_potion_agility600_1", "potion_fire_resistance300_1", "potion_fire_resistance800_1", "trowable_potion_fire_resistance215_1", "trowable_potion_fire_resistance600_1",
        "potion_posion_045_1", "potion_posion_022_2", "potion_posion_200_1", "trowable_potion_posion_033_1", "trowable_potion_posion_016_2", "trowable_potion_posion_130_1", "potion_health_1", "potion_health_2", "trowable_potion_health_1",
        "trowable_potion_health_2", "potion_nightvision_300", "potion_nightvision_800", "trowable_potion_nightvision_215", "trowable_potion_nightvision_600", "potion_weakness_130", "potion_weakness_400", "trowable_potion_weakness_107", "trowable_potion_weakness_300",
        "potion_strength_300_1", "potion_strength_130_2", "potion_strength_130_1", "trowable_potion_strength_215_1", "trowable_potion_strength_107_2", "trowable_potion_strength_600_1", "potion_slowness_130", "potion_slowness_400", "trowable_potion_slowness_107",
        "trowable_potion_slowness_300", "potion_harming_1", "potion_harming_2", "trowable_potion_harming_1", "trowable_potion_harming_2", "potion_invisibility_300", "potion_invisibility_800", "trowable_potion_invisibility_215", "trowable_potion_invisibility_600",
        "bottle", "fermented_spider_eye", "balze_powder", "magma_cream", "brewing_stand", "cauldron", "glowing_melon"
    ],


    "materials": [
        "coal", "charcoal", "diamond", "iron_ingot", "gold_ingot", "stick", "bowl", "line", "feather",
        "gun_powder", "seed", "wheat", "flint", "leather", "brick", "clay", "sugar_cane", "egg",
        "glowstone_dust", "ink_sac", "red_dye", "green_dye", "cacau_seed", "lapis_lazuli", "purple_dye", "cyan_dye", "light_gray_dye",
        "gray_dye", "pink_dye", "lime_dye", "yellow_dye", "light_blue_dye", "magenta_dye", "orange_dye", "bone_meal", "sugar",
        "pumpkin_seed", "melon_seed", "blaze_rod", "gold_nugget", "nether_wart", "emerald", "nether_star", "nether_brick", "quartz"
    ]

};