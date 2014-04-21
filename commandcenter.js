function createCommandCenter(opts) {

  function createPanes(paneOpts) {    
    var panes = opts.paneRoot.selectAll('.pane').data(paneOpts.videos, id);

    panes.enter().append('div')
      .classed('pane', true)
      .attr('id', id)
      .each(createVideoPane);

    // TODO: Update and exit handling.
  }

  function id(d) {
    return d.id;
  }

  return {
    createPanes: createPanes
  };
}

// var commandCenter = createCommandCenter();
