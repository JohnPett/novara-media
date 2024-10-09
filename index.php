<?php get_header(); ?>
<main>
  <?php
    get_template_part('includes/title', null, array(
      'title' => get_bloginfo('name')
    ));
    include ('includes/hero.php');
    include('includes/posts.php');
  ?>
  <div class="lg:hidden">
    <?php include('includes/signup.php'); ?>
  </div>
</main>
<?php get_footer(); ?>
